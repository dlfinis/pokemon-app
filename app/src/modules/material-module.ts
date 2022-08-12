import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {NgModule} from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatBadgeModule} from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { MatStepperModule } from '@angular/material/stepper';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  exports: [
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    MatRadioModule,
    // MatRippleModule,
    MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
    PortalModule,
    ScrollingModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
