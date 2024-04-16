import { Component, OnInit } from '@angular/core';
import { GraphqlService } from 'src/app/core/modules/graphql/services/graphql.service';

import { fetchAllEmployees } from './query/employee.query';

@Component({
  selector: 'cosap-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.scss'],
})
export class SummaryViewComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private gql: GraphqlService) {}

  data?: any;

  async fetchData() {
    this.data = JSON.stringify(await this.gql.executeQuery(fetchAllEmployees));
  }
}
