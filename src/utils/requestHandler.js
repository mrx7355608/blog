import expressAsyncHandler from "express-async-handler";

export default function requestHandler(controller) {
    return expressAsyncHandler(async (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
        };
        const response = await controller(httpRequest);
        return res.status(response.statusCode).json(response.body);
    });
}
