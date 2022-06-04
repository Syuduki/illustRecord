import * as React from "react";
import { Props } from "./types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { IndexSearch } from "../../Molecules/IndexSearch";
import { SearchField } from "../../Atoms/SearchField";

export const TagList: React.FC<Props> = ({ ...props }) => {
  const [index, setIndex] = React.useState<
    "あ" | "か" | "さ" | "た" | "な" | "は" | "ま" | "や" | "ら" | "わ" | ""
  >("あ");

  const selectTag = (id: number) => {
    let tempSelectedTags = [...props.selectedTags];
    if (props.selectedTags?.includes(id)) {
      tempSelectedTags.splice(tempSelectedTags.indexOf(id), 1);
    } else {
      tempSelectedTags.push(id);
    }
    props.setSelectedTags([...tempSelectedTags]);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <SearchField
          placeholder="タグを検索"
          onSubmit={(keyword) => props.onSearch("input", keyword)}
          width={400}
        />
        <IndexSearch
          index={index}
          setIndex={setIndex}
          onChange={(keyword) => props.onSearch("tab", keyword)}
        />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={6}
          style={{ marginTop: "20px" }}
        >
          {props.tagList.map((tag) => (
            <>
              {props.type === "select" && (
                <Button
                  key={tag.id}
                  variant={
                    props.selectedTags?.includes(tag.id)
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => selectTag(tag.id)}
                >
                  {tag.name}
                </Button>
              )}
              {props.type === "register" && (
                <Button
                  key={tag.id}
                  variant="text"
                  onClick={() => props.onClickTag(tag.id)}
                  size="large"
                >
                  {tag.name}
                </Button>
              )}
            </>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
