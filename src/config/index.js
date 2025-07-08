import path from "path";
import { fileURLToPath } from 'url';
import { logger } from "../core/logger.js";

// Get current file path
const __filename = fileURLToPath(import.meta.url);
// Get current directory path
const __dirname = path.dirname(__filename);

global.rootPath = path.normalize(path.join(__dirname, "..", ".."));

const NODE_ENV = process.env.NODE_ENV || "dev";

const isDevMode = () => NODE_ENV === "dev";
const isProductionMode = () => NODE_ENV === "prod";

let config = {};
if (isDevMode()) {
  config = (await import("./dev.js")).default;
} else if (isProductionMode()) {
  config = (await import("./prod.js")).default;
}

// Export functions and config
export { isDevMode, isProductionMode, config };
