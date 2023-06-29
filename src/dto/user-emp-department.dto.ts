import {EmpDepartmentVo, UserVo} from "../vo";

export interface UserEmpDepartmentDto {
    emp: UserVo;
    dept: EmpDepartmentVo;
}