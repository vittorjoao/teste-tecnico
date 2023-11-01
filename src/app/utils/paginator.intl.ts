import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

/* Injectable class for translating Paginator component */
@Injectable()
export class PTBRMatPaginatorIntl extends MatPaginatorIntl {
  constructor() {
    super();
    this.itemsPerPageLabel = 'Items por página: ';
    this.firstPageLabel = 'Primeira página';
    this.lastPageLabel = 'Última página';
    this.nextPageLabel = 'Página seguinte';
    this.previousPageLabel = 'Página anterior';
    this.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length == 0 || pageSize == 0) {
        return `0 de ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    };
  }
}
