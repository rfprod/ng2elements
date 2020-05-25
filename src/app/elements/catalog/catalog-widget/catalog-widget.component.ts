import { Component, Input, OnInit } from '@angular/core';

import { IUser } from '../../../interfaces/index';
import { UserService } from '../../../services/user/user.service';

/**
 * Catalog widget component
 */
@Component({
  selector: 'app-catalog-widget',
  templateUrl: './catalog-widget.component.html',
  styleUrls: ['./catalog-widget.component.scss'],
})
export class CatalogWidgetComponent implements OnInit {
  /**
   * Component theme.
   */
  @Input() public theme: 'primary' | 'accent' | 'warn' = 'primary';

  /**
   * User object.
   */
  @Input() public user: IUser = new IUser();

  /**
   * Indicates if mocked server should be used.
   */
  public mock = true;

  /**
   * Constructor.
   * @param userService Users service
   */
  constructor(private readonly userService: UserService) {}

  /**
   * Selects real or mocked server., used in config callback.
   * @param event server change event
   */
  public selectServer(event: { mock: boolean }): void {
    this.mock = event.mock;
  }

  /**
   * Catalog data change event handler.
   */
  public catalogChangeHandler(event: string[]): string[] {
    // TODO
    return event;
  }

  public ngOnInit(): void {
    this.userService.saveUser(this.user);
  }
}