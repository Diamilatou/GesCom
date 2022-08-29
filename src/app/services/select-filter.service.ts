import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SelectFilterService {
  constructor() {}
  /**
   * Write code on Method
   *
   * method logical code
   */
  filterMethodWithName(values: any, ControleValue: any) {
    if (!values) {
      return;
    }

    let search = ControleValue;
    if (!search) {
      // this.filterCaegories.next(values);
      return values;
    } else {
      search = search.toLowerCase();
    }

    // this.filterCaegories.next(
    //   values.filter((value: any) => value.name.toLowerCase().indexOf(search) > -1)
    // );
    return values.filter((value: any) =>
      value.name.toLowerCase().indexOf(search) > -1
    );
  }
  filterMethodWithFullName(values: any, ControleValue: any) {
    if (!values) {
      return;
    }

    let search = ControleValue;
    if (!search) {
      // this.filterCaegories.next(values);
      return values;
    } else {
      search = search.toLowerCase();
    }

    // this.filterCaegories.next(
    //   values.filter((value: any) => value.name.toLowerCase().indexOf(search) > -1)
    // );
    return values.filter((value: any) =>
      value.fullName.toLowerCase().indexOf(search) > -1
    );
  }
  filterMethodWithFirstNameAndLastName(values: any, ControleValue: any) {
    if (!values) {
      return;
    }

    let search = ControleValue;
    if (!search) {
      // this.filterCaegories.next(values);
      return values;
    } else {
      search = search.toLowerCase();
    }

    // this.filterCaegories.next(
    //   values.filter((value: any) => value.name.toLowerCase().indexOf(search) > -1)
    // );
    return values.filter((value: any) =>
      value.firstName.toLowerCase().indexOf(search) > -1 ||
      (value.lastName.toLowerCase().indexOf(search) > -1)
    );
  }
  filterMethodWithCommande(values: any, ControleValue: any) {
    if (!values) {
      return;
    }

    let search = ControleValue;
    if (!search) {
      // this.filterCaegories.next(values);
      return values;
    } else {
      search = search.toLowerCase();
    }

    return values.filter((value: any) =>
      value.id.toLowerCase().indexOf(search) > -1
    );
  }
  filterMethodWithAll(values: any, ControleValue: any, attr: any) {
    if (!values) {
      return;
    }

    let search = ControleValue;
    if (!search) {
      // this.filterCaegories.next(values);
      return values;
    } else {
      search = search.toLowerCase();
    }

    return values.filter((value: any) => {
      if (Array.isArray(value[attr])) {
        let Exist = false;
        value[attr].map((item: any) => {
          Exist = item.toLowerCase().indexOf(search) > -1;
        });
        return Exist;
      } else {
        return value[attr].toLowerCase().indexOf(search) > -1;
      }
    });
  }
  filterMethodWithNumAccount(values: any, ControleValue: any) {
    if (!values) {
      return;
    }

    let search = ControleValue;
    if (!search) {
      // this.filterCaegories.next(values);
      return values;
    } else {
      search = search.toLowerCase();
    }

    return values.filter((value: any) =>
      value.numAccount.toLowerCase().indexOf(search) > -1
    );
  }
}
