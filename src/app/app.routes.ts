import { Routes ,RouterLink,RouterLinkActive} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatorModeComponent } from './creator-mode/creator-mode.component';
import { AiToolsComponent } from './ai-tools/ai-tools.component';
import { RefHubComponent } from './ref-hub/ref-hub.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {'path':'home','title':'Home',component:HomeComponent},
    {'path':"creator-mode",'title':'CreatorMode',component:CreatorModeComponent},
    {'path':'ai-tools','title':'Ai Tools',component:AiToolsComponent},
    {'path':"ref-hub",'title':'RefHub',component:RefHubComponent},
    {'path':'',redirectTo:'/home',pathMatch:'full'},
    {'path':'**',component:PageNotFoundComponent}
];
