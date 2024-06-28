import { Router } from "express"
import { authenticateToken } from "../../middleware/jsonWebTokens"
import { getAllUsers } from "../../controllers/users/getAllUsers"
import { RBAC } from "../../middleware/roleBasedAccessControl"

const router = Router()

router.get("/", authenticateToken, RBAC.checkCanGetUsers, getAllUsers)

export default router
