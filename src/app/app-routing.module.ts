import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ValidateAuthGuard } from './services/validate-auth.guard';
import { AuthGuard } from './services/auth.guard';






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
      {
        path: 'lockscreen',
        component: LockscreenComponent,
      },
      {
        path: 'forgetpassword',
        component: ForgetpasswordComponent,
      },
      {
        path: 'starterpage',
        component: StarterpageComponent,
      }
    ],
    canActivate: [ValidateAuthGuard]
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
        path: 'fixedsidebar',
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
      },
      {
        path: 'slider',
        component: SliderComponent,
      },
      {
        path: 'modalsandalerts',
        component: ModalsandalertsComponent,
      },
      {
        path: 'navbarandtabs',
        component: NavbarandtabsComponent,
      },
      {
        path: 'timeline',
        component: TimelineComponent,
      },
      {
        path: 'ribbons',
        component: RibbonsComponent,
      },
      {
        path: 'generalelements',
        component: GeneralelementsComponent,
      },
      {
        path: 'advanced',
        component: AdvancedComponent,
      },
      {
        path: 'editor',
        component: EditorComponent,
      },
      {
        path: 'validation',
        component: ValidationComponent,
      },
      {
        path: 'simpletable',
        component: SimpletableComponent,
      },
      {
        path: 'datatable',
        component: DatatableComponent,
      },
      {
        path: 'jsgrid',
        component: JsgridComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      },
      {
        path: 'compose',
        component: ComposeComponent,
      },
      {
        path: 'read',
        component: ReadComponent,
      },
      {
        path: 'invoice',
        component: InvoiceComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'projectadd',
        component: ProjectaddComponent,
      },
      {
        path: 'projectedit',
        component: ProjecteditComponent,
      },
      {
        path: 'projectdetail',
        component: ProjectdetailComponent,
      },
      {
        path: 'contacts',
        component: ContactsComponent,
      },
      {
        path: 'legacy',
        component: LegacyComponent,
      },
      {
        path: 'languagemenu',
        component: LanguagemenuComponent,
      },
      {
        path: 'error404',
        component: Error404Component,
      },
      {
        path: 'error500',
        component: Error500Component,
      },
      {
        path: 'pace',
        component: PaceComponent,
      },
      {
        path: 'blankpage',
        component: BlankpageComponent,
      },
      {
        path: 'level1',
        component: Level1Component,
      },
      {
        path: 'leve001',
        component: Leve001Component,
      },
      {
        path: 'level2',
        component: Level2Component,
      },
      {
        path: 'level02',
        component: Level02Component,
      },
      {
        path: 'level002',
        component: Level002Component,
      },
      {
        path: 'level003',
        component: Level003Component,
      },
      {
        path: 'level03',
        component: Level03Component,
      },
      {
        path: 'level3',
        component: Level3Component,
      },
      {
        path: 'level0001',
        component: Level0001Component,
      },
      {
        path: 'important',
        component: ImportantComponent,
      },
      {
        path: 'warning',
        component: WarningComponent,

      },
      {
        path: 'informational',
        component: InformationalComponent,
      }

    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
