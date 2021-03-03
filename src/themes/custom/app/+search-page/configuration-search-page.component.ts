import { Component, ChangeDetectionStrategy } from '@angular/core';
import { pushInOut } from '../../../../app/shared/animations/push';
import { SEARCH_CONFIG_SERVICE } from '../../../../app/+my-dspace-page/my-dspace-page.component';
import { SearchConfigurationService } from '../../../../app/core/shared/search/search-configuration.service';
import { ConfigurationSearchPageComponent as BaseComponent } from '../../../../app/+search-page/configuration-search-page.component';

@Component({
  selector: 'ds-configuration-search-page',
  // styleUrls: ['./configuration-search-page.component.scss'],
  styleUrls: ['../../../../app/+search-page/search.component.scss'],
  // templateUrl: './configuration-search-page.component.html'
  templateUrl: '../../../../app/+search-page/search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [pushInOut],
  providers: [
    {
      provide: SEARCH_CONFIG_SERVICE,
      useClass: SearchConfigurationService
    }
  ]
})

/**
 * Component to render the news section on the home page
 */
export class ConfigurationSearchPageComponent extends BaseComponent {}

