import { ReactComponent as SvgClose } from '../../assets/icon/close.svg';
import { ReactComponent as SvgLoading } from '../../assets/icon/loading.svg';
import { SVGProps, FunctionComponent } from 'react';

type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>;

export interface Sheet {
  close: SvgIcon;
  loading: SvgIcon;
}

let sheet: Sheet = {
  close: SvgClose,
  loading: SvgLoading
};

export type IconType = keyof Sheet;
export default sheet;
