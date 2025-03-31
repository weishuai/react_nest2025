import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  Headers,
} from '@nestjs/common';
import _ from 'lodash';
import axios from 'axios';
@Controller('/pythonShell')
export class PythonShellController {
  //private logger = Logger.getLogger(PythonShellController);

  ///@di.Inject()
  ///private purchaseOrderService: PurchaseOrderService;
  pytAPIURL = 'http://crmreport:5000';
  ///pytAPIURL = ' http://127.0.0.1:5001';

  @Get('/sendMessage/:FHType/:FHtxt')
  async sendMessage(
    @Param('FHType') FHType: string,
    @Param('FHtxt') FHtxt: string,
  ) {
    let URL = '';

    const data = {
      FHType: FHType,
      FHJosn: FHtxt,
    };

    await axios({
      method: 'POST',
      url: '/sendMessage',
      baseURL: this.pytAPIURL,
      data: data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        URL = res.data;
      })
      .catch((err) => {
        URL = err;
      });
    console.log(URL);
    return { fhdata: URL };
  }
}
