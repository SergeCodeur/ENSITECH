import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GestionCoursComponent } from './components/gestion-cours/gestion-cours.component';
import { GestionStudentsComponent } from './components/gestion-students/gestion-students.component';
import { GestionTeachersComponent } from './components/gestion-teachers/gestion-teachers.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AuthService } from './services/auth/auth.service';
export function initializeApp(authService: AuthService) {
  return () => {
    // Vérifier l'authentification au démarrage
    authService.checkAuthentication();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    GestionCoursComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    DashboardMainComponent,
    GestionStudentsComponent,
    ReportsComponent,
    GestionTeachersComponent,
    SearchStudentComponent,
    FilterpipePipe,
    FiltercoursePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AuthService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
