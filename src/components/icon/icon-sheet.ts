import { ReactComponent as SVGCaretDown } from '../../assets/icon/caret-down.svg';
import { ReactComponent as SVGCheck } from '../../assets/icon/check.svg';
import { ReactComponent as SVGClose } from '../../assets/icon/close.svg';
import { ReactComponent as SVGLoading } from '../../assets/icon/loading.svg';
import { ReactComponent as SVGMinus } from '../../assets/icon/minus.svg';
import { ReactComponent as SVGPlus } from '../../assets/icon/plus.svg';
import { SVGProps, FunctionComponent } from 'react';

type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

export interface Sheet {
  ['caret-down']: SVGIcon;
  ['check']: SVGIcon;
  ['close']: SVGIcon;
  ['loading']: SVGIcon;
  ['minus']: SVGIcon;
  ['plus']: SVGIcon;
}

let iconSheet: Sheet = {
  ['caret-down']: SVGCaretDown,
  ['check']: SVGCheck,
  ['close']: SVGClose,
  ['loading']: SVGLoading,
  ['minus']: SVGMinus,
  ['plus']: SVGPlus
};

export type IconType = keyof Sheet;
export default iconSheet;
