import * as React from 'react';
import type { Components, RangeList, Locale } from '../interface';

export type RangesProps = {
  prefixCls: string;
  rangeList?: RangeList;
  components?: Components;
  needConfirmButton: boolean;
  onNow?: null | (() => void) | false;
  onOk?: null | (() => void) | false;
  onCancel?: null | (() => void) | false;
  okDisabled?: boolean;
  showNow?: boolean;
  locale: Locale;
};

export default function getRanges({
  prefixCls,
  rangeList = [],
  components = {},
  needConfirmButton,
  onNow,
  onOk,
  onCancel,
  okDisabled,
  showNow,
  locale,
}: RangesProps) {
  let presetNode: React.ReactNode;
  let okNode: React.ReactNode;
  let cancelNode: React.ReactNode;

  if (rangeList.length) {
    const Item = (components.rangeItem || 'span') as any;

    presetNode = (
      <>
        {rangeList.map(({ label, onClick, onMouseEnter, onMouseLeave }) => (
          <li key={label} className={`${prefixCls}-preset`}>
            <Item onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              {label}
            </Item>
          </li>
        ))}
      </>
    );
  }

  if (needConfirmButton) {
    const OkButton = (components.okButton || 'button') as any;
    const CancelButton = (components.cancelButton || 'button') as any;

    if (onNow && !presetNode && showNow !== false) {
      presetNode = (
        <li className={`${prefixCls}-now`}>
          <a className={`${prefixCls}-now-btn`} onClick={onNow}>
            {locale.now}
          </a>
        </li>
      );
    }

    okNode = needConfirmButton && (
      <span className={`${prefixCls}-ok`}>
        <OkButton disabled={okDisabled} onClick={onOk}>
          {locale.ok}
        </OkButton>
      </span>
    );

    if (rangeList.length) {
      cancelNode = needConfirmButton && (
        <span className={`${prefixCls}-cancel`}>
          <CancelButton disabled={okDisabled} onClick={onCancel}>
            {locale.cancel}
          </CancelButton>
        </span>
      );
    }
  }

  if (!presetNode && !okNode) {
    return null;
  }

  return (
    <ul className={`${prefixCls}-ranges`}>
      {presetNode}
      <li className={`${prefixCls}-btns`}>
        {okNode}
        {rangeList.length ? cancelNode : null}
      </li>
    </ul>
  );
}
