import { Component, OnInit } from '@angular/core';

declare var $: any, db: any;

@Component({
  selector: 'app-jsgrid',
  templateUrl: './jsgrid.component.html',
  styleUrls: ['./jsgrid.component.css']
})
export class JsgridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')


    $(function () {
      $("#jsGrid1").jsGrid({
          height: "100%",
          width: "100%",
   
          sorting: true,
          paging: true,
   
          data: db.clients,
   
          fields: [
              { name: "Name", type: "text", width: 150 },
              { name: "Age", type: "number", width: 50 },
              { name: "Address", type: "text", width: 200 },
              { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
              { name: "Married", type: "checkbox", title: "Is Married" }
          ]
      });
    });

  }

}
