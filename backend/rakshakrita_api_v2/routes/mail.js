
import express from "express"
import { PythonShell } from 'python-shell';
const router = express.Router();

const runModel = async (file, options) => {
    const response = await PythonShell.run(file, options);
    return response;
}

router.post('/', async (req, res) => {
    try {
        const response = await runModel('routes/pyfile/main.py', {})
        res.json({ success: true, html: response })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
});

export default router;