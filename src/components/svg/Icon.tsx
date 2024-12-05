import { SVGProps } from 'react';
import { ICON_NAME } from '@site/src/lib/constants/enums';
import People from './People';
import Leave from './Leave';
import Attendance from './Attendance';

type IconName = {
  name: ICON_NAME;
}

const Icon = (props: IconName & SVGProps<SVGSVGElement>) => {
  switch (props.name) {
    case ICON_NAME.PEOPLE:
      return <People {...props} />;
      case ICON_NAME.LEAVE:
        return <Leave {...props} />;
      case ICON_NAME.ATTENDANCE:
      return <Attendance {...props} />;
    default:
      return <></>;
  }
};

export default Icon;
