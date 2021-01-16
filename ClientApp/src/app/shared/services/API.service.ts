/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateCelightCmsAppsInput = {
  idApps: number;
  appKey: string;
};

export type UpdateCelightCmsAppsInput = {
  idApps: number;
  appKey?: string | null;
};

export type DeleteCelightCmsAppsInput = {
  idApps: number;
};

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
  clientId: string;
  id_Apps: Array<number | null>;
};

export type UpdateCelightCmsUserInput = {
  idUser: string;
  firstName?: string | null;
  lastName?: string | null;
  clientId?: string | null;
  id_Apps?: Array<number | null> | null;
};

export type DeleteCelightCmsUserInput = {
  idUser: string;
};

export type TableCelightCmsAppsFilterInput = {
  idApps?: TableIntFilterInput | null;
  appKey?: TableStringFilterInput | null;
};

export type TableIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
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

export type TableCelightCmsCustomerFilterInput = {
  idCustomer?: TableStringFilterInput | null;
  firstName?: TableStringFilterInput | null;
  lastName?: TableStringFilterInput | null;
  department?: TableStringFilterInput | null;
  employedSince?: TableStringFilterInput | null;
};

export type TableCelightCmsUserFilterInput = {
  idUser?: TableStringFilterInput | null;
  firstName?: TableStringFilterInput | null;
  lastName?: TableStringFilterInput | null;
  clientId?: TableStringFilterInput | null;
  id_Apps?: TableIntFilterInput | null;
};

export type CreateCelightCmsAppsMutation = {
  __typename: "CelightCmsApps";
  idApps: number;
  appKey: string;
};

export type UpdateCelightCmsAppsMutation = {
  __typename: "CelightCmsApps";
  idApps: number;
  appKey: string;
};

export type DeleteCelightCmsAppsMutation = {
  __typename: "CelightCmsApps";
  idApps: number;
  appKey: string;
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
  clientId: string;
  id_Apps: Array<number | null>;
};

export type UpdateCelightCmsUserMutation = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  clientId: string;
  id_Apps: Array<number | null>;
};

export type DeleteCelightCmsUserMutation = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  clientId: string;
  id_Apps: Array<number | null>;
};

export type GetCelightCmsAppsQuery = {
  __typename: "CelightCmsApps";
  idApps: number;
  appKey: string;
};

export type ListCelightCmsAppsQuery = {
  __typename: "CelightCmsAppsConnection";
  items: Array<{
    __typename: "CelightCmsApps";
    idApps: number;
    appKey: string;
  } | null> | null;
  nextToken: string | null;
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
  clientId: string;
  id_Apps: Array<number | null>;
};

export type ListCelightCmsUsersQuery = {
  __typename: "CelightCmsUserConnection";
  items: Array<{
    __typename: "CelightCmsUser";
    idUser: string;
    firstName: string;
    lastName: string;
    clientId: string;
    id_Apps: Array<number | null>;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCelightCmsAppsSubscription = {
  __typename: "CelightCmsApps";
  idApps: number;
  appKey: string;
};

export type OnUpdateCelightCmsAppsSubscription = {
  __typename: "CelightCmsApps";
  idApps: number;
  appKey: string;
};

export type OnDeleteCelightCmsAppsSubscription = {
  __typename: "CelightCmsApps";
  idApps: number;
  appKey: string;
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
  clientId: string;
  id_Apps: Array<number | null>;
};

export type OnUpdateCelightCmsUserSubscription = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  clientId: string;
  id_Apps: Array<number | null>;
};

export type OnDeleteCelightCmsUserSubscription = {
  __typename: "CelightCmsUser";
  idUser: string;
  firstName: string;
  lastName: string;
  clientId: string;
  id_Apps: Array<number | null>;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCelightCmsApps(
    input: CreateCelightCmsAppsInput
  ): Promise<CreateCelightCmsAppsMutation> {
    const statement = `mutation CreateCelightCmsApps($input: CreateCelightCmsAppsInput!) {
        createCelightCmsApps(input: $input) {
          __typename
          idApps
          appKey
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCelightCmsAppsMutation>response.data.createCelightCmsApps;
  }
  async UpdateCelightCmsApps(
    input: UpdateCelightCmsAppsInput
  ): Promise<UpdateCelightCmsAppsMutation> {
    const statement = `mutation UpdateCelightCmsApps($input: UpdateCelightCmsAppsInput!) {
        updateCelightCmsApps(input: $input) {
          __typename
          idApps
          appKey
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCelightCmsAppsMutation>response.data.updateCelightCmsApps;
  }
  async DeleteCelightCmsApps(
    input: DeleteCelightCmsAppsInput
  ): Promise<DeleteCelightCmsAppsMutation> {
    const statement = `mutation DeleteCelightCmsApps($input: DeleteCelightCmsAppsInput!) {
        deleteCelightCmsApps(input: $input) {
          __typename
          idApps
          appKey
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCelightCmsAppsMutation>response.data.deleteCelightCmsApps;
  }
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
          clientId
          id_Apps
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
          clientId
          id_Apps
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
          clientId
          id_Apps
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
  async GetCelightCmsApps(idApps: number): Promise<GetCelightCmsAppsQuery> {
    const statement = `query GetCelightCmsApps($idApps: Int!) {
        getCelightCmsApps(idApps: $idApps) {
          __typename
          idApps
          appKey
        }
      }`;
    const gqlAPIServiceArguments: any = {
      idApps
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCelightCmsAppsQuery>response.data.getCelightCmsApps;
  }
  async ListCelightCmsApps(
    filter?: TableCelightCmsAppsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCelightCmsAppsQuery> {
    const statement = `query ListCelightCmsApps($filter: TableCelightCmsAppsFilterInput, $limit: Int, $nextToken: String) {
        listCelightCmsApps(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            idApps
            appKey
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
    return <ListCelightCmsAppsQuery>response.data.listCelightCmsApps;
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
          clientId
          id_Apps
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
            clientId
            id_Apps
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
  OnCreateCelightCmsAppsListener: Observable<
    SubscriptionResponse<OnCreateCelightCmsAppsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCelightCmsApps($idApps: Int, $appKey: String) {
        onCreateCelightCmsApps(idApps: $idApps, appKey: $appKey) {
          __typename
          idApps
          appKey
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCelightCmsAppsSubscription>>;

  OnUpdateCelightCmsAppsListener: Observable<
    SubscriptionResponse<OnUpdateCelightCmsAppsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCelightCmsApps($idApps: Int, $appKey: String) {
        onUpdateCelightCmsApps(idApps: $idApps, appKey: $appKey) {
          __typename
          idApps
          appKey
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCelightCmsAppsSubscription>>;

  OnDeleteCelightCmsAppsListener: Observable<
    SubscriptionResponse<OnDeleteCelightCmsAppsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCelightCmsApps($idApps: Int, $appKey: String) {
        onDeleteCelightCmsApps(idApps: $idApps, appKey: $appKey) {
          __typename
          idApps
          appKey
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCelightCmsAppsSubscription>>;

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
      `subscription OnCreateCelightCmsUser($idUser: String, $firstName: String, $lastName: String, $clientId: String, $id_Apps: [Int]) {
        onCreateCelightCmsUser(idUser: $idUser, firstName: $firstName, lastName: $lastName, clientId: $clientId, id_Apps: $id_Apps) {
          __typename
          idUser
          firstName
          lastName
          clientId
          id_Apps
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCelightCmsUserSubscription>>;

  OnUpdateCelightCmsUserListener: Observable<
    SubscriptionResponse<OnUpdateCelightCmsUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCelightCmsUser($idUser: String, $firstName: String, $lastName: String, $clientId: String, $id_Apps: [Int]) {
        onUpdateCelightCmsUser(idUser: $idUser, firstName: $firstName, lastName: $lastName, clientId: $clientId, id_Apps: $id_Apps) {
          __typename
          idUser
          firstName
          lastName
          clientId
          id_Apps
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCelightCmsUserSubscription>>;

  OnDeleteCelightCmsUserListener: Observable<
    SubscriptionResponse<OnDeleteCelightCmsUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCelightCmsUser($idUser: String, $firstName: String, $lastName: String, $clientId: String, $id_Apps: [Int]) {
        onDeleteCelightCmsUser(idUser: $idUser, firstName: $firstName, lastName: $lastName, clientId: $clientId, id_Apps: $id_Apps) {
          __typename
          idUser
          firstName
          lastName
          clientId
          id_Apps
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCelightCmsUserSubscription>>;
}
