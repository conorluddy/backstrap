import { ROLES } from "./roles"

export enum PERMISSIONS {
  CAN_GET_ALL_USERS = "can_get_all_users",
  CAN_UPDATE_ANY_USER = "can_update_any_user",
  CAN_UPDATE_ANY_USER_STATUS = "can_update_any_user_status",
  CAN_DELETE_ANY_USER = "can_delete_any_user",
  CAN_UPDATE_OWN_PROFILE = "can_update_own_profile",
  YOULL_DO_NOTHIN = "youll_do_nothin",
}

export const ACL: { [key in ROLES]: PERMISSIONS[] } = {
  [ROLES.OWNER]: [
    PERMISSIONS.CAN_GET_ALL_USERS,
    PERMISSIONS.CAN_UPDATE_ANY_USER,
    PERMISSIONS.CAN_DELETE_ANY_USER,
  ],
  [ROLES.ADMIN]: [
    PERMISSIONS.CAN_GET_ALL_USERS,
    PERMISSIONS.CAN_UPDATE_ANY_USER,
    PERMISSIONS.CAN_DELETE_ANY_USER,
  ],
  [ROLES.MODERATOR]: [
    PERMISSIONS.CAN_GET_ALL_USERS,
    PERMISSIONS.CAN_UPDATE_OWN_PROFILE,
    PERMISSIONS.CAN_UPDATE_ANY_USER_STATUS,
  ],
  [ROLES.DEFAULT]: [PERMISSIONS.CAN_UPDATE_OWN_PROFILE],
  [ROLES.LOCKED]: [PERMISSIONS.YOULL_DO_NOTHIN],
}
