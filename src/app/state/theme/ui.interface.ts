import { Observable } from 'rxjs';
import { IActionPayload } from 'src/app/utils/ngxs.util';

export interface IUiStateModel {
  darkThemeEnabled: boolean;
}

export type UiPayload = IActionPayload<IUiStateModel>;

export interface IUiService {
  darkThemeEnabled$: Observable<boolean>;
}