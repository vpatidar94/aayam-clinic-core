import { KeyValueVo } from "../key-value.vo";

export interface ObservationVo {
    date: Date;
    healthParams: Array<KeyValueVo>;
}