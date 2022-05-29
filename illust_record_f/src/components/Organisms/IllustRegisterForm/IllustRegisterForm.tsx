import * as React from 'react';
import { Controller } from 'react-hook-form';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

import { IProps } from './types';
import { IllustData, Tag } from '../../../types/illustRegister';

import { ImageUploadField } from '../../Atoms/ImageUploadField';
import { TextField } from '../../Atoms/TextField';
import { DateField } from '../../Atoms/DateField';
import { ReferenceField } from '../../Molecules/ReferenceField';

export const IllustRegisterForm: React.FC<IProps> = ({ ...props }) => {
  const [title, setTitle] = React.useState<string>(props.illustData.title);
  const [contents, setContents] = React.useState<string>(
    props.illustData.contents
  );
  const [note, setNote] = React.useState<string>(props.illustData.note);
  const [startDate, setStartDate] = React.useState<string>(
    props.illustData.startDate
  );
  const [endDate, setEndDate] = React.useState<string>(
    props.illustData.endDate
  );
  const [tags, setTags] = React.useState<Tag[]>(props.illustData.tags);
  const [imageSrc, setImageSrc] = React.useState<string>(
    props.illustData.imageSrc
  );

  const setIllustData = () => {
    const tempIllustData: IllustData = {
      id: 1,
      title: title,
      contents: contents,
      note: note,
      startDate: startDate,
      endDate: endDate,
      tags: { ...props.illustData.tags },
      imageSrc: imageSrc,
    };

    props.setIllustData({ ...props.illustData, ...tempIllustData });
  };

  const IMAGE_SRC_RULE_LIST = {
    required: { value: true, message: '画像をアップロードしてください' },
  };

  const TITLE_RULE_LIST = {
    required: { value: true, message: 'タイトルは必須項目です' },
    maxLength: {
      value: 10,
      message: 'タイトルは10文字以下で入力してください',
    },
  };

  const CONTENTS_RULE_LIST = {
    maxLength: {
      value: 30,
      message: '説明は30文字以下で入力してください',
    },
  };

  const NOTE_RULE_LIST = {
    maxLength: {
      value: 100,
      message: '備考は100文字以下で入力してください',
    },
  };

  const START_DATE_RULE_LIST = {
    validate: {
      beforeEndDate: (value: string) => value < endDate,
    },
  };

  const END_DATE_RULE_LIST = {
    validate: {
      afterStartDate: (value: string) => startDate < value,
    },
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={12}
      style={{ marginTop: '20px' }}
    >
      <Controller
        name={'image'}
        control={props.control}
        rules={IMAGE_SRC_RULE_LIST}
        render={({ field }) => (
          <div {...field}>
            <ImageUploadField imageSrc={imageSrc} setImageSrc={setImageSrc} />
            <Typography
              variant="caption"
              display="block"
              style={{ marginTop: '4px', color: 'red' }}
            >
              {props.formState.errors['image'] &&
                props.formState.errors['image'].message}
            </Typography>
          </div>
        )}
      />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Controller
          name={'title'}
          control={props.control}
          rules={TITLE_RULE_LIST}
          render={({ field }) => (
            <div {...field}>
              <TextField
                id="title"
                label="タイトル"
                value={title}
                setValue={setTitle}
                multiline={false}
                size={'small'}
                variant={'standard'}
                formState={props.formState}
              />
            </div>
          )}
        />
        <Controller
          name={'contents'}
          control={props.control}
          rules={CONTENTS_RULE_LIST}
          render={({ field }) => (
            <div {...field}>
              <TextField
                id="contents"
                label="説明"
                value={contents}
                setValue={setContents}
                multiline={false}
                size={'small'}
                variant={'standard'}
                formState={props.formState}
              />
            </div>
          )}
        />
        <Controller
          name={'note'}
          control={props.control}
          rules={NOTE_RULE_LIST}
          render={({ field }) => (
            <div {...field}>
              <TextField
                id="note"
                label="備考"
                value={note}
                setValue={setNote}
                multiline={true}
                size={'small'}
                variant={'standard'}
                formState={props.formState}
              />
            </div>
          )}
        />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={4}
        >
          <Controller
            name={'startDate'}
            control={props.control}
            rules={START_DATE_RULE_LIST}
            render={({ field }) => (
              <div {...field}>
                <DateField
                  id="startDate"
                  label="開始日"
                  value={startDate}
                  setValue={setStartDate}
                  size={'small'}
                  variant={'standard'}
                />
                <Typography variant="caption" display="block" gutterBottom>
                  {props.formState.errors['startDate'] &&
                    props.formState.errors['startDate'].message}
                </Typography>
              </div>
            )}
          />
          <Controller
            name={'endDate'}
            control={props.control}
            rules={END_DATE_RULE_LIST}
            render={({ field }) => (
              <div {...field}>
                <DateField
                  id="endDate"
                  label="終了日"
                  value={endDate}
                  setValue={setEndDate}
                  size={'small'}
                  variant={'standard'}
                />
                <Typography variant="caption" display="block" gutterBottom>
                  {props.formState.errors['endDate'] &&
                    props.formState.errors['endDate'].message}
                </Typography>
              </div>
            )}
          />
        </Stack>
        <Controller
          name={'tags'}
          control={props.control}
          render={({ field }) => (
            <div {...field}>
              <ReferenceField
                id="tags"
                label="タグ"
                values={tags}
                formState={props.formState}
                onClick={() => {}}
              />
            </div>
          )}
        />
      </Stack>
    </Stack>
  );
};
