/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateCelightCmsCustomerInput = {
  idCustomer: string;
  firstName: string;
  lastName: string;
  department: string;
  employedSince: string;
};

export type UpdateCelightCmsCustomerInput = {
  idCustomer: string;
  firstName?: string | null;
  lastName?: string | null;
  department?: string | null;
  employedSince?: string | null;
};

export type DeleteCelightCmsCustomerInput = {
  idCustomer: string;
};

export type CreateCelightCmsUserInput = {
  idUser: string;
  firstName: string;
  lastName: string;
  widgetKeys: Array<string | null>;
};

export type UpdateCelightCmsUserInput = {
  idUser: string;
  firstName?: string | null;
  lastName?: string | null;
  widgetKeys?: Array<string | null> | null;
};

export type DeleteCelightCmsUserInput = {
  idUser: string;
};

export type TableCelightCmsCustomerFilterInput = {
  idCustomer?: TableStringFilterInput | null;
  firstName?: TableStringFilterInput | null;
  lastName?: TableStringFilterInput | null;
  department?: TableStringFilterInput | null;
  employedSince?: TableStringFilterInput | null;
};

export type TableStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type TableCelightCmsUserFilterInput = {
  idUser?: TableStringFilterInput | null;
  firstName?: TableStringFilterInput | null;
  lastName?: TableStringFilterInput | null;
  widgetKeys?: TableStringFilterInput | null;
};

export type CreateCelightCmsCustomerMutation = {
  __typename: "CelightCmsCustomer";
  idCustomer: string;
  firstName: string;
  lastName: string;
  department: string;
  employedSince: string;
};

export type UpdateCelightCmsCustomerMutation = {
  __typename: "CelightCmsCustomer";
  idCustomer: string;
  firstName: string;
  lastName: string;
  department: string;
  employedSince: string;
};

export type DeleteCelightCmsCustomerMutation = {
  __typename: "CelightCmsCustomer";
  idCustomer: string;
  firstName: string;
  lastName: string;
  department: string;
  employedSince: string;
};

export type CreateCelightCmsUserMutation = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  widgetKeys: Array<string | null>;
};

export type UpdateCelightCmsUserMutation = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  widgetKeys: Array<string | null>;
};

export type DeleteCelightCmsUserMutation = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  widgetKeys: Array<string | null>;
};

export type GetQuery = {
  __typename: "Thing";
  id: string;
  title: string;
  meta: string | null;
};

export type GetCelightCmsCustomerQuery = {
  __typename: "CelightCmsCustomer";
  idCustomer: string;
  firstName: string;
  lastName: string;
  department: string;
  employedSince: string;
};

export type ListCelightCmsCustomersQuery = {
  __typename: "CelightCmsCustomerConnection";
  items: Array<{
    __typename: "CelightCmsCustomer";
    idCustomer: string;
    firstName: string;
    lastName: string;
    department: string;
    employedSince: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCelightCmsUserQuery = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  widgetKeys: Array<string | null>;
};

export type ListCelightCmsUsersQuery = {
  __typename: "CelightCmsUserConnection";
  items: Array<{
    __typename: "CelightCmsUser";
    idUser: string;
    firstName: string;
    lastName: string;
    widgetKeys: Array<string | null>;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCelightCmsCustomerSubscription = {
  __typename: "CelightCmsCustomer";
  idCustomer: string;
  firstName: string;
  lastName: string;
  department: string;
  employedSince: string;
};

export type OnUpdateCelightCmsCustomerSubscription = {
  __typename: "CelightCmsCustomer";
  idCustomer: string;
  firstName: string;
  lastName: string;
  department: string;
  employedSince: string;
};

export type OnDeleteCelightCmsCustomerSubscription = {
  __typename: "CelightCmsCustomer";
  idCustomer: string;
  firstName: string;
  lastName: string;
  department: string;
  employedSince: string;
};

export type OnCreateCelightCmsUserSubscription = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  widgetKeys: Array<string | null>;
};

export type OnUpdateCelightCmsUserSubscription = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  widgetKeys: Array<string | null>;
};

export type OnDeleteCelightCmsUserSubscription = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  widgetKeys: Array<string | null>;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCelightCmsCustomer(
    input: CreateCelightCmsCustomerInput
  ): Promise<CreateCelightCmsCustomerMutation> {
    const statement = `mutation CreateCelightCmsCustomer($input: CreateCelightCmsCustomerInput!) {
        createCelightCmsCustomer(input: $input) {
          __typename
          idCustomer
          firstName
          lastName
          department
          employedSince
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCelightCmsCustomerMutation>(
      response.data.createCelightCmsCustomer
    );
  }
  async UpdateCelightCmsCustomer(
    input: UpdateCelightCmsCustomerInput
  ): Promise<UpdateCelightCmsCustomerMutation> {
    const statement = `mutation UpdateCelightCmsCustomer($input: UpdateCelightCmsCustomerInput!) {
        updateCelightCmsCustomer(input: $input) {
          __typename
          idCustomer
          firstName
          lastName
          department
          employedSince
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCelightCmsCustomerMutation>(
      response.data.updateCelightCmsCustomer
    );
  }
  async DeleteCelightCmsCustomer(
    input: DeleteCelightCmsCustomerInput
  ): Promise<DeleteCelightCmsCustomerMutation> {
    const statement = `mutation DeleteCelightCmsCustomer($input: DeleteCelightCmsCustomerInput!) {
        deleteCelightCmsCustomer(input: $input) {
          __typename
          idCustomer
          firstName
          lastName
          department
          employedSince
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCelightCmsCustomerMutation>(
      response.data.deleteCelightCmsCustomer
    );
  }
  async CreateCelightCmsUser(
    input: CreateCelightCmsUserInput
  ): Promise<CreateCelightCmsUserMutation> {
    const statement = `mutation CreateCelightCmsUser($input: CreateCelightCmsUserInput!) {
        createCelightCmsUser(input: $input) {
          __typename
          idUser
          firstName
          lastName
          widgetKeys
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCelightCmsUserMutation>response.data.createCelightCmsUser;
  }
  async UpdateCelightCmsUser(
    input: UpdateCelightCmsUserInput
  ): Promise<UpdateCelightCmsUserMutation> {
    const statement = `mutation UpdateCelightCmsUser($input: UpdateCelightCmsUserInput!) {
        updateCelightCmsUser(input: $input) {
          __typename
          idUser
          firstName
          lastName
          widgetKeys
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCelightCmsUserMutation>response.data.updateCelightCmsUser;
  }
  async DeleteCelightCmsUser(
    input: DeleteCelightCmsUserInput
  ): Promise<DeleteCelightCmsUserMutation> {
    const statement = `mutation DeleteCelightCmsUser($input: DeleteCelightCmsUserInput!) {
        deleteCelightCmsUser(input: $input) {
          __typename
          idUser
          firstName
          lastName
          widgetKeys
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCelightCmsUserMutation>response.data.deleteCelightCmsUser;
  }
  async Get(id?: string, meta?: string): Promise<GetQuery> {
    const statement = `query Get($id: ID, $meta: String) {
        get(id: $id, meta: $meta) {
          __typename
          id
          title
          meta
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (meta) {
      gqlAPIServiceArguments.meta = meta;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuery>response.data.get;
  }
  async GetCelightCmsCustomer(
    idCustomer: string
  ): Promise<GetCelightCmsCustomerQuery> {
    const statement = `query GetCelightCmsCustomer($idCustomer: String!) {
        getCelightCmsCustomer(idCustomer: $idCustomer) {
          __typename
          idCustomer
          firstName
          lastName
          department
          employedSince
        }
      }`;
    const gqlAPIServiceArguments: any = {
      idCustomer
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCelightCmsCustomerQuery>response.data.getCelightCmsCustomer;
  }
  async ListCelightCmsCustomers(
    filter?: TableCelightCmsCustomerFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCelightCmsCustomersQuery> {
    const statement = `query ListCelightCmsCustomers($filter: TableCelightCmsCustomerFilterInput, $limit: Int, $nextToken: String) {
        listCelightCmsCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            idCustomer
            firstName
            lastName
            department
            employedSince
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCelightCmsCustomersQuery>response.data.listCelightCmsCustomers;
  }
  async GetCelightCmsUser(idUser: string): Promise<GetCelightCmsUserQuery> {
    const statement = `query GetCelightCmsUser($idUser: String!) {
        getCelightCmsUser(idUser: $idUser) {
          __typename
          idUser
          firstName
          lastName
          widgetKeys
        }
      }`;
    const gqlAPIServiceArguments: any = {
      idUser
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCelightCmsUserQuery>response.data.getCelightCmsUser;
  }
  async ListCelightCmsUsers(
    filter?: TableCelightCmsUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCelightCmsUsersQuery> {
    const statement = `query ListCelightCmsUsers($filter: TableCelightCmsUserFilterInput, $limit: Int, $nextToken: String) {
        listCelightCmsUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            idUser
            firstName
            lastName
            widgetKeys
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCelightCmsUsersQuery>response.data.listCelightCmsUsers;
  }
  OnCreateCelightCmsCustomerListener: Observable<
    SubscriptionResponse<OnCreateCelightCmsCustomerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCelightCmsCustomer($idCustomer: String, $firstName: String, $lastName: String, $department: String, $employedSince: String) {
        onCreateCelightCmsCustomer(idCustomer: $idCustomer, firstName: $firstName, lastName: $lastName, department: $department, employedSince: $employedSince) {
          __typename
          idCustomer
          firstName
          lastName
          department
          employedSince
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCelightCmsCustomerSubscription>>;

  OnUpdateCelightCmsCustomerListener: Observable<
    SubscriptionResponse<OnUpdateCelightCmsCustomerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCelightCmsCustomer($idCustomer: String, $firstName: String, $lastName: String, $department: String, $employedSince: String) {
        onUpdateCelightCmsCustomer(idCustomer: $idCustomer, firstName: $firstName, lastName: $lastName, department: $department, employedSince: $employedSince) {
          __typename
          idCustomer
          firstName
          lastName
          department
          employedSince
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCelightCmsCustomerSubscription>>;

  OnDeleteCelightCmsCustomerListener: Observable<
    SubscriptionResponse<OnDeleteCelightCmsCustomerSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCelightCmsCustomer($idCustomer: String, $firstName: String, $lastName: String, $department: String, $employedSince: String) {
        onDeleteCelightCmsCustomer(idCustomer: $idCustomer, firstName: $firstName, lastName: $lastName, department: $department, employedSince: $employedSince) {
          __typename
          idCustomer
          firstName
          lastName
          department
          employedSince
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCelightCmsCustomerSubscription>>;

  OnCreateCelightCmsUserListener: Observable<
    SubscriptionResponse<OnCreateCelightCmsUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCelightCmsUser($idUser: String, $firstName: String, $lastName: String, $widgetKeys: [String]) {
        onCreateCelightCmsUser(idUser: $idUser, firstName: $firstName, lastName: $lastName, widgetKeys: $widgetKeys) {
          __typename
          idUser
          firstName
          lastName
          widgetKeys
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCelightCmsUserSubscription>>;

  OnUpdateCelightCmsUserListener: Observable<
    SubscriptionResponse<OnUpdateCelightCmsUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCelightCmsUser($idUser: String, $firstName: String, $lastName: String, $widgetKeys: [String]) {
        onUpdateCelightCmsUser(idUser: $idUser, firstName: $firstName, lastName: $lastName, widgetKeys: $widgetKeys) {
          __typename
          idUser
          firstName
          lastName
          widgetKeys
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCelightCmsUserSubscription>>;

  OnDeleteCelightCmsUserListener: Observable<
    SubscriptionResponse<OnDeleteCelightCmsUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCelightCmsUser($idUser: String, $firstName: String, $lastName: String, $widgetKeys: [String]) {
        onDeleteCelightCmsUser(idUser: $idUser, firstName: $firstName, lastName: $lastName, widgetKeys: $widgetKeys) {
          __typename
          idUser
          firstName
          lastName
          widgetKeys
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCelightCmsUserSubscription>>;
}
