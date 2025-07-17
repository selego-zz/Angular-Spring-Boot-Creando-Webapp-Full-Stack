import { Component, Input } from '@angular/core';
import { Company } from '../../models/Company';

@Component({
  selector: 'company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.html',
})
export class CompanyViewComponent {
  @Input() company!: Company;
}
