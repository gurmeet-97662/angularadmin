import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './layout/auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { PasswordRecoverComponent } from './auth/passwordrecover/passwordrecover.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { Dashboard1Component } from './components/dashboard1/dashboard1.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { TopnavigationComponent } from './components/layoutoption/topnavigation/topnavigation.component';
import { TopnavigationsidebarComponent } from './components/layoutoption/topnavigationsidebar/topnavigationsidebar.component';
import { BoxedComponent } from './components/layoutoption/boxed/boxed.component';
import { FixedsidebarComponent } from './components/layoutoption/fixedsidebar/fixedsidebar.component';
import { FixednavbarComponent } from './components/layoutoption/fixednavbar/fixednavbar.component';
import { FixedfooterComponent } from './components/layoutoption/fixedfooter/fixedfooter.component';
import { CollapsedsidebarComponent } from './components/layoutoption/collapsedsidebar/collapsedsidebar.component';
import { ChartsjsComponent } from './components/charts/chartsjs/chartsjs.component';
import { FloatComponent } from './components/charts/float/float.component';
import { InlineComponent } from './components/charts/inline/inline.component';
import { GeneralComponent } from './components/ui/general/general.component';
import { IconsComponent } from './components/ui/icons/icons.component';
import { ButtonsComponent } from './components/ui/buttons/buttons.component';
import { MainComponent } from './layout/main/main.component';
import { SliderComponent } from './components/ui/slider/slider.component';
import { ModalsandalertsComponent } from './components/ui/modalsandalerts/modalsandalerts.component';
import { NavbarandtabsComponent } from './components/ui/navbarandtabs/navbarandtabs.component';
import { TimelineComponent } from './components/ui/timeline/timeline.component';
import { RibbonsComponent } from './components/ui/ribbons/ribbons.component';
import { GeneralelementsComponent } from './components/forms/generalelements/generalelements.component';
import { AdvancedComponent } from './components/forms/advanced/advanced.component';
import { EditorComponent } from './components/forms/editor/editor.component';
import { ValidationComponent } from './components/forms/validation/validation.component';
import { SimpletableComponent } from './components/tables/simpletable/simpletable.component';
import { DatatableComponent } from './components/tables/datatable/datatable.component';
import { JsgridComponent } from './components/tables/jsgrid/jsgrid.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { InboxComponent } from './components/mailbox/inbox/inbox.component';
import { ComposeComponent } from './components/mailbox/compose/compose.component';
import { ReadComponent } from './components/mailbox/read/read.component';
import { InvoiceComponent } from './components/pages/invoice/invoice.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { EcommerceComponent } from './components/pages/ecommerce/ecommerce.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectaddComponent } from './components/pages/projectadd/projectadd.component';
import { ProjecteditComponent } from './components/pages/projectedit/projectedit.component';
import { ProjectdetailComponent } from './components/pages/projectdetail/projectdetail.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { LockscreenComponent } from './components/extras/lockscreen/lockscreen.component';
import { LegacyComponent } from './components/extras/legacy/legacy.component';
import { LanguagemenuComponent } from './components/extras/languagemenu/languagemenu.component';
import { Error404Component } from './components/extras/error404/error404.component';
import { Error500Component } from './components/extras/error500/error500.component';
import { PaceComponent } from './components/extras/pace/pace.component';
import { BlankpageComponent } from './components/extras/blankpage/blankpage.component';
import { StarterpageComponent } from './components/extras/starterpage/starterpage.component';
import { Level1Component } from './components/multilevelexample/level1/level1.component';
import { Leve001Component } from './components/multilevelexample/level01/leve001/leve001.component';
import { Level2Component } from './components/multilevelexample/level01/level2/level2.component';
import { Level02Component } from './components/multilevelexample/level01/level02/level02.component';
import { Level002Component } from './components/multilevelexample/level01/level002/level002.component';
import { Level003Component } from './components/multilevelexample/level01/level02/level003/level003.component';
import { Level03Component } from './components/multilevelexample/level01/level02/level03/level03.component';
import { Level3Component } from './components/multilevelexample/level01/level02/level3/level3.component';
import { Level0001Component } from './components/multilevelexample/level0001/level0001.component';
import { ImportantComponent } from './components/labels/important/important.component';
import { WarningComponent } from './components/labels/warning/warning.component';
import { InformationalComponent } from './components/labels/informational/informational.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';


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
    SliderComponent,
    ModalsandalertsComponent,
    NavbarandtabsComponent,
    TimelineComponent,
    RibbonsComponent,
    GeneralelementsComponent,
    AdvancedComponent,
    EditorComponent,
    ValidationComponent,
    SimpletableComponent,
    DatatableComponent,
    JsgridComponent,
    CalendarComponent,
    GalleryComponent,
    InboxComponent,
    ComposeComponent,
    ReadComponent,
    InvoiceComponent,
    ProfileComponent,
    EcommerceComponent,
    ProjectsComponent,
    ProjectaddComponent,
    ProjecteditComponent,
    ProjectdetailComponent,
    ContactsComponent,
    LockscreenComponent,
    LegacyComponent,
    LanguagemenuComponent,
    Error404Component,
    Error500Component,
    PaceComponent,
    BlankpageComponent,
    StarterpageComponent,
    Level1Component,
    Leve001Component,
    Level2Component,
    Level02Component,
    Level002Component,
    Level3Component,
    Level03Component,
    Level003Component,
    Level0001Component,
    ImportantComponent,
    WarningComponent,
    InformationalComponent,
    ForgetpasswordComponent,
    
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
