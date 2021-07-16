/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import Prismic from "@prismicio/client";
import { DefaultClient } from "@prismicio/client/types/client";
import { ApiOptions } from "@prismicio/client/types/Api";
import { LeadersResponse } from "../models/leaders-response";
import { Leader } from "../models/leader";
import { Image } from "../models/image";
import { Dimensions } from "../models/dimensions";
import { Description } from "../models/description";
import { QueryOptions } from "@prismicio/client/types/ResolvedApi";



@Injectable()
export class LeadersService {

  private baseURL = "https://characterscope-engineering-recruitment.cdn.prismic.io/api/v2";
  private documentType = "leader-types";
  private documentUID = "leaders";

  api: DefaultClient;

  get(): Promise<LeadersResponse> {
    this.api = Prismic.client(this.baseURL, this.getOptions());
    return this.api.getByUID(this.documentType, this.documentUID, this.getQueryOptions()).then((response) => {
      console.log("Documents: ", response);
      return this.mapToResponse(response.data);
    });

  }


  private getOptions(): ApiOptions {
    return {
      accessToken: "MC5ZRzhYTkJNQUFDSUFpa09f.77-9Tg3vv70B77-977-9GSzvv70V77-9GBdB77-977-9HRUS77-9F--_vVfvv73vv706ARDvv73vv73vv70"
    };
  }

  private getQueryOptions(): QueryOptions {
    return  { lang: "en-gb" };
  }

  private mapToResponse(data: any): LeadersResponse {
    const leadersResponse = new LeadersResponse();
    leadersResponse.leaders = [];
    leadersResponse.title = data.title[0].text;
    leadersResponse.titleClass = data.title[0].type;
    data.types.forEach(type => {
      leadersResponse.leaders.push(this.mapToLeader(type));
    });
    return leadersResponse;
  }

  private mapToLeader(apiType: any): Leader {
    return new Leader(
      apiType.name[0].text,
      apiType.name[0].type,
      this.mapToImage(apiType.exemplar_image),
      apiType.colour,
      this.mapToDescription(apiType.description)
    );
  }

  private mapToImage(apiImage: any): Image {
     return new Image(
        apiImage.alt,
        new Dimensions(apiImage.dimensions.width, apiImage.dimensions.height),
        apiImage.url
     );
  }

  private mapToDescription(apiDescriptions: any[]): Description[] {
    const descriptionList = [];
    apiDescriptions.forEach(desc => {
      descriptionList.push(new Description(desc.text, desc.type));
    });
    return descriptionList;
  }

}