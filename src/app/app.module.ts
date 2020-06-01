import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './layout/auth/auth.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RegisterComponent,
    PasswordRecoverComponent,
    DashboardComponent,
    Dashboard2Component,
    Dashboard1Component,
    ChatsComponent,
    WidgetsComponent,
    TopnavigationComponent,
    TopnavigationsidebarComponent,
    BoxedComponent,
    FixedsidebarComponent,
    FixednavbarComponent,
    FixedfooterComponent,
    CollapsedsidebarComponent,
    ChartsjsComponent,
    FloatComponent,
    InlineComponent,
    GeneralComponent,
    IconsComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
