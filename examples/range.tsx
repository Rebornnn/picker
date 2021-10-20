import React from 'react';
import type { Moment } from 'moment';
import moment from 'moment';
import RangePicker from '../src/RangePicker';
import momentGenerateConfig from '../src/generate/moment';
import zhCN from '../src/locale/zh_CN';
import '../assets/index.less';
import './common.less';

const defaultStartValue = moment('1990-01-08');
const defaultEndValue = moment('1990-02-20');

function formatDate(date: Moment | null) {
  return date ? date.format('YYYY-MM-DD HH:mm:ss') : 'null';
}

export default () => {
  // 是否展开日期控件面板
  // const [panelOpen, setPanelOpen] = React.useState(false);
  const [value, setValue] = React.useState<[Moment | null, Moment | null] | null>([
    defaultStartValue,
    defaultEndValue,
  ]);

  const onOk = (newValue: [Moment | null, Moment | null] | null, formatStrings?: string[]) => {
    console.log('Change:', newValue, formatStrings);
    setValue(newValue);
  };

  // const onCalendarChange = (
  //   newValue: [Moment | null, Moment | null] | null,
  //   formatStrings?: string[],
  // ) => {
  //   console.log('Calendar Change:', newValue, formatStrings);
  // };

  const sharedProps = {
    generateConfig: momentGenerateConfig,
    value,
    onOk,
    // onCalendarChange,
  };

  const rangePickerRef = React.useRef<RangePicker<Moment>>(null);

  // 日期控件面板展开收起回调
  // function handlePanelOpen(open: boolean) {
  //   if (open) {
  //     setPanelOpen(true);
  //   }
  // }

  return (
    <div>
      <h2>Value: {value ? `${formatDate(value[0])} ~ ${formatDate(value[1])}` : 'null'}</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ margin: '0 8px' }}>
          <h3>Basic</h3>
          <RangePicker<Moment>
            {...sharedProps}
            // open={panelOpen}
            defaultValue={[moment('1989-02-08'), moment('1989-03-20')]}
            // value={undefined}
            locale={zhCN}
            allowClear
            ref={rangePickerRef}
            // clearIcon={<span>X</span>}
            // suffixIcon={<span>O</span>}
            onCancel={(v) => console.log(v)}
            // disabledDate={(current) => current && current > moment('1989-03-09').endOf('day')}
            // confirmButton={false}
            // onOpenChange={handlePanelOpen}
            // renderExtraFooter={() => (
            //   <>
            //     <button onClick={() => setPanelOpen(false)}>确认</button>
            //     <button onClick={() => setPanelOpen(false)}>取消</button>
            //   </>
            // )}
          />
          {/* <RangePicker<Moment>
            {...sharedProps}
            locale={zhCN}
            allowClear
            ref={rangePickerRef}
            showTime
            style={{ width: 700 }}
            // ranges={{
            //   ranges: [moment(), moment().add(10, 'day')],
            // }}
            onOk={(dates) => {
              console.log('OK!!!', dates);
            }}
          /> */}
          {/* <RangePicker<Moment>
            {...sharedProps}
            value={undefined}
            locale={zhCN}
            allowClear
            picker="time"
            ranges={{
              test: [moment(), moment().add(1, 'hour')],
            }}
          /> */}
        </div>

        {/* <div style={{ margin: '0 8px' }}>
          <h3>Focus</h3>
          <RangePicker<Moment>
            {...sharedProps}
            locale={zhCN}
            allowClear
            ref={rangePickerRef}
            // style={{ width: 500 }}
          />
          <button
            type="button"
            onClick={() => {
              rangePickerRef.current!.focus();
            }}
          >
            Focus!
          </button>
        </div> */}

        {/* <div style={{ margin: '0 8px' }}>
          <h3>Year</h3>
          <RangePicker<Moment> {...sharedProps} locale={zhCN} picker="year" />
        </div> */}

        {/* <div style={{ margin: '0 8px' }}>
          <h3>Quarter</h3>
          <RangePicker<Moment> {...sharedProps} locale={zhCN} picker="quarter" />
        </div> */}

        {/* <div style={{ margin: '0 8px' }}>
          <h3>Month</h3>
          <RangePicker<Moment> {...sharedProps} locale={zhCN} picker="month" />
        </div>

        <div style={{ margin: '0 8px' }}>
          <h3>Week</h3>
          <RangePicker<Moment> {...sharedProps} locale={zhCN} picker="week" />
        </div> */}

        {/* <div style={{ margin: '0 8px' }}>
          <h3>Allow Empty</h3>
          <RangePicker<Moment>
            {...sharedProps}
            locale={zhCN}
            allowClear
            allowEmpty={[true, true]}
          />
        </div>

        <div style={{ margin: '0 8px' }}>
          <h3>Start disabled</h3>
          <RangePicker<Moment> {...sharedProps} locale={zhCN} allowClear disabled={[true, false]} />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>End disabled</h3>
          <RangePicker<Moment> {...sharedProps} locale={zhCN} allowClear disabled={[false, true]} />
        </div>

        <div style={{ margin: '0 8px' }}>
          <h3>Uncontrolled</h3>
          <RangePicker<Moment>
            {...sharedProps}
            value={undefined}
            locale={zhCN}
            placeholder={['start...', 'end...']}
            disabled={[false, true]}
            allowEmpty={[false, true]}
            renderExtraFooter={() => <div>extra footer</div>}
          />
        </div>
        <div style={{ margin: '0 8px' }}>
          <h3>Uncontrolled2</h3>
          <RangePicker<Moment>
            {...sharedProps}
            value={undefined}
            locale={zhCN}
            placeholder={['start...', 'end...']}
          />
        </div> */}
      </div>
    </div>
  );
};
