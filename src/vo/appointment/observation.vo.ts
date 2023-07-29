import { KeyValueVo } from "../key-value.vo";

export interface ObservationVo {
    date: Date;
    observation: Array<KeyValueVo>;
}