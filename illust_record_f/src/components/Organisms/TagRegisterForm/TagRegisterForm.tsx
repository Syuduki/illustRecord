import * as React from "react";
import { Props } from "./types";

import { Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";
import { TextField } from "../../Atoms/TextField";

export const TagRegisterForm: React.FC<Props> = ({ ...props }) => {
  const TAG_NAME_RULE_LIST = {
    required: { value: true, message: "タグ名は必須項目です" },
  };

  const FURIGANA_RULE_LIST = {
    required: { value: true, message: "ふりがなは必須項目です" },
    maxLength: {
      value: 30,
      message: "ふりがなは30文字以下で入力してください",
    },
  };

  const NOTE_RULE_LIST = {
    maxLength: {
      value: 100,
      message: "備考は100文字以下で入力してください",
    },
  };

  return (
    <Stack spacing={3}>
      <Controller
        name={"name"}
        control={props.control}
        rules={TAG_NAME_RULE_LIST}
        render={({ field }) => (
          <div {...field}>
            <TextField
              id="name"
              label="タグ名"
              value={props.tagData.name}
              onChangeValue={(value: string) => {
                props.setTagData({
                  ...props.tagData,
                  ["name"]: value,
                });
              }}
              multiline={false}
              size={"small"}
              variant={"standard"}
              formState={props.formState}
            />
          </div>
        )}
      />
      <Controller
        name={"furigana"}
        control={props.control}
        rules={FURIGANA_RULE_LIST}
        render={({ field }) => (
          <div {...field}>
            <TextField
              id="furigana"
              label="ふりがな"
              value={props.tagData.furigana}
              onChangeValue={(value: string) => {
                props.setTagData({
                  ...props.tagData,
                  ["furigana"]: value,
                });
              }}
              multiline={false}
              size={"small"}
              variant={"standard"}
              formState={props.formState}
            />
          </div>
        )}
      />
      <Controller
        name={"note"}
        control={props.control}
        rules={NOTE_RULE_LIST}
        render={({ field }) => (
          <div {...field}>
            <TextField
              id="note"
              label="備考"
              value={props.tagData.note}
              onChangeValue={(value: string) => {
                props.setTagData({
                  ...props.tagData,
                  ["note"]: value,
                });
              }}
              multiline={true}
              size={"small"}
              variant={"standard"}
              formState={props.formState}
            />
          </div>
        )}
      />
    </Stack>
  );
};
