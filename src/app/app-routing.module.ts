import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './layout/auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { PasswordRecoverComponent } from './passwordrecover/passwordrecover.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { ChatsComponent } from './chats/chats.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { TopnavigationComponent } from './layoutoption/topnavigation/topnavigation.component';
import { TopnavigationsidebarComponent } from './layoutoption/topnavigationsidebar/topnavigationsidebar.component';
import { BoxedComponent } from './layoutoption/boxed/boxed.component';
import { FixedsidebarComponent } from './layoutoption/fixedsidebar/fixedsidebar.component';
import { FixednavbarComponent } from './layoutoption/fixednavbar/fixednavbar.component';
import { FixedfooterComponent } from './layoutoption/fixedfooter/fixedfooter.component';
import { CollapsedsidebarComponent } from './layoutoption/collapsedsidebar/collapsedsidebar.component';
import { ChartsjsComponent } from './charts/chartsjs/chartsjs.component';
import { FloatComponent } from './charts/float/float.component';
import { InlineComponent } from './charts/inline/inline.component';
import { GeneralComponent } from './ui/general/general.component';
import { IconsComponent } from './ui/icons/icons.component';
import { ButtonsComponent } from './ui/buttons/buttons.component';
import { MainComponent } from './layout/main/main.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent

      },

      {
        path: 'register',
        component: RegisterComponent,

      },
      {
        path: 'passwordrecover',
        component: PasswordRecoverComponent,
      },
    ]
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
      },
      {
        path: 'dashboard1',
        component: Dashboard1Component,
      },
      {
        path: 'chats',
        component: ChatsComponent,
      },
      {
        path: 'widgets',
        component: WidgetsComponent,
      },
      {
        path: 'topnavigation',
        component: TopnavigationComponent,
      },
      {
        path: 'topnavigationsidebar',
        component: TopnavigationsidebarComponent,
      },
      {
        path: 'boxed',
        component: BoxedComponent
      },
      {
        path: 'fixedsiedbar',
        component: FixedsidebarComponent,
      },
      {
        path: 'fixednavbar',
        component: FixednavbarComponent,
      },
      {
        path: 'fixedfooter',
        component: FixedfooterComponent,
      },
      {
        path: 'collapsedsidebar',
        component: CollapsedsidebarComponent,
      },
      {
        path: 'chartsjs',
        component: ChartsjsComponent,
      },
      {
        path: 'float',
        component: FloatComponent,
      },
      {
        path: 'inline',
        component: InlineComponent,
      },
      {
        path: 'general',
        component: GeneralComponent,
      },
      {
        path: 'icons',
        component: IconsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
