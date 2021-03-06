import {Component, OnInit, ViewChild} from '@angular/core';
import {NameListService} from '../shared/name-list/name-list.service';
import {DataTable, DataTableResource} from 'angular-4-data-table';
import {RemoteService} from "./articles-remote-service";
import {Router} from '@angular/router';
import {ArticlesRoutingModule} from "./articles-routing.module";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'articles.component.html',
  styleUrls: ['articles.component.css'],
})
export class ArticlesComponent implements OnInit {

  articlesArray=[
    {
      title:'title',
      subtitle:'this is a sub title',
      create_date:'2017-04-10T18:38:17.378Z',
      last_update:'2017-04-10T18:38:17.378Z',
      _id:'58ebd119c8318f3a1885488e',
      content:'<h1>hello </h1>',
      active:true
    }
  ];
  items=[];
  // items  = this.articlesArray;
  itemCount = 0;
  ngOnInit() {
  }

  constructor(private remoteService: RemoteService, private router: Router) {

  }

  reloadItems(params) {
    this.remoteService.query(params).then(result => {
      this.items = result.items;
      this.itemCount = result.count;
    });
  }

  goToCreate(){
    this.router.navigate(['articles/new']);
  }
  rowClick (e:any) {
    this.router.navigate(['articles',e.row.item._id]);
      console.log(e.row.item._id);
  }


  DeleteArticle(item:any){

    this.remoteService.removeArticleById(item._id)
    console.log('hhhhhhhhh');
  }
}
