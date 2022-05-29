import * as React from 'react';
import { Controller } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { IProps } from './types';

import { ImageUploadField } from '../../Atoms/ImageUploadField';
import { TextField } from '../../Atoms/TextField';
import { DateField } from '../../Atoms/DateField';
import { ReferenceField } from '../../Molecules/ReferenceField';

export const IllustRegisterForm: React.FC<IProps> = ({ ...props }) => {
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
      beforeEndDate: (value: string) => value < props.illustData.endDate,
    },
  };

  const END_DATE_RULE_LIST = {
    validate: {
      afterStartDate: (value: string) => props.illustData.startDate < value,
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
        name={'imageSrc'}
        control={props.control}
        rules={IMAGE_SRC_RULE_LIST}
        render={({ field }) => (
          <div {...field}>
            <ImageUploadField
              imageSrc={props.illustData.imageSrc}
              onChangeImage={(value: string) => {
                props.setIllustData({
                  ...props.illustData,
                  ['imageSrc']: value,
                });
              }}
            />
            <Typography
              variant="caption"
              display="block"
              style={{ marginTop: '4px', color: 'red' }}
            >
              {props.formState.errors['imageSrc'] &&
                props.formState.errors['imageSrc'].message}
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
                value={props.illustData.title}
                onChangeValue={(value: string) => {
                  props.setIllustData({
                    ...props.illustData,
                    ['title']: value,
                  });
                }}
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
                value={props.illustData.contents}
                onChangeValue={(value: string) => {
                  props.setIllustData({
                    ...props.illustData,
                    ['contents']: value,
                  });
                }}
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
                value={props.illustData.note}
                onChangeValue={(value: string) => {
                  props.setIllustData({
                    ...props.illustData,
                    ['note']: value,
                  });
                }}
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
                  value={props.illustData.startDate}
                  onChangeDate={(value: string) => {
                    props.setIllustData({
                      ...props.illustData,
                      ['startDate']: value,
                    });
                  }}
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
                  value={props.illustData.endDate}
                  onChangeDate={(value: string) => {
                    props.setIllustData({
                      ...props.illustData,
                      ['endDate']: value,
                    });
                  }}
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
                values={props.illustData.tags}
                formState={props.formState}
                onClick={props.onClickTag}
              />
            </div>
          )}
        />
      </Stack>
    </Stack>
  );
};
