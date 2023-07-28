<template>
  <b-container fluid>
    <form method="post" ref="form" @submit.prevent="submitForm">
      <div class="d-flex justify-content-between align-items-center ">
        <h4 class="mb-6">Gold Loan</h4>
        <!-- <button type="submit" class="btn btn-primary" variant="success">
          Apply
        </button> -->

      </div>

      <b-row class="font">
        <b-col sm="8" lg="9">
          <b-card header="Basic Information " class="mt-3 mb-3">
            <b-row class="my-1">
              <b-col sm="6" class="mb-3">
                <label for="input-none" readonly class="form-label">Select Member:</label>

                <b-form-select readonly v-model="Member" :options="options">
                  <option value="">Select Member</option>
                  <option v-for="data in tableData" :key="data.id" onclick="dataa(data)" :value="data.idkycupdate">{{ data.name }}</option>
                </b-form-select>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">NAME:</label>

                <b-form-input readonly type="text" v-model="name" id="input-none" :state="null" placeholder="NAME"></b-form-input>
              </b-col>


              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Gender:</label>

                <b-form-select readonly v-model="Gender" :options="options" placeholder="CITY">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>

                </b-form-select>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Aadhar Number:</label>

                <b-form-input readonly type="text" v-model="Aadhar" id="input-none" :state="null"
                  placeholder="Aadhar No"></b-form-input>
              </b-col>

              <b-col sm="6" class="mb-3">
                <label for="input-none1"  class="form-label">Phone Number:
                </label>

                <b-form-input type="text" readonly v-model="Phone" id="input-none1" title="Please enter 10 digit mobile no."
                  placeholder="Phone"></b-form-input>
              </b-col>

              <b-col sm="6" class="mb-3">
                <label for="input-none2" class="form-label">PAN Number:</label>

                <b-form-input type="text" readonly v-model="pan" id="input-none2" :state="null" placeholder="PAN"></b-form-input>
              </b-col>


            </b-row>
          </b-card>
          <b-card class="mt-3 mb-3" header="Charges Information " bg="dark">

            <b-row class="my-1">

              <b-col sm="6" class="mb-3 ">
                <label for="input-none" class="form-label">Processing Charge:</label>

                <b-form-input type="number" v-model="processingcharge" id="input-none" :state="null"
                  placeholder=""></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Form price:</label>

                <b-form-input type="text" v-model="formprice" id="input-none" :state="null" placeholder=""></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Service Charge</label>

                <b-form-input type="number" v-model="servicecharge" id="input-none" :state="null"
                  placeholder=""></b-form-input>
              </b-col>
            </b-row>
          </b-card>

          <b-card header="Account & Loan Information " bg="dark">

            <b-row class="my-1">
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Account Opening Date:</label>

                <b-form-input type="date" v-model="OpeningDate" id="input-none" :state="null"
                  placeholder="Opening Date"></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Scheme Name:</label>

                <b-form-input type="text" v-model="SchemeName" id="input-none" :state="null"
                  placeholder="Scheme Name"></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none1" class="form-label">Interest Type:
                </label>
                <b-form-select v-model="InterestType" :options="options">
                  <option value="">Select Interest Type</option>
                  <option value="1">Flat Interest</option>
                  <option value="2">Floating Interest </option>
                </b-form-select>

              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Consumer Loan Amount:</label>

                <b-form-input type="text" v-model="LoanAmount" id="input-none" :state="null"
                  placeholder=""></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Enter Period:</label>

                <b-form-input type="number"  v-model="Period" id="input-none" :state="null" placeholder=""></b-form-input>
              </b-col>
            </b-row>

            <b-row class="my-1">


            </b-row>

            <b-row class="my-1">
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">ROI</label>

                <b-form-input type="text" v-model="roi" id="input-none" :state="null" placeholder=""></b-form-input>
              </b-col>



              <b-col sm="6" class="mb-3">
                <label for="input-none1" class="form-label">Maturity Amount:
                </label>

                <b-form-input type="number" v-model="MaturityAmount" id="input-none1" :state="null" title=""
                  placeholder=""></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col sm="6" class="mb-3">
                <label for="input-none2" class="form-label">EMI Amount:</label>

                <b-form-input type="text" v-model="EMIAmount" id="input-none2" :state="null"
                  placeholder=""></b-form-input>
              </b-col>

              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">First EMI Date:</label>
                <b-form-input type="date" v-model="FirstEMIDate" id="input-none2" :state="null"
                  placeholder=""></b-form-input>

              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Maturity Date :</label>

                <b-form-input type="date" v-model="Maturity" id="input-none" :state="null" placeholder=""></b-form-input>
              </b-col>

              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Guarantor 1:</label>
                <b-form-select v-model="Guarantor1" :options="options" placeholder="Guarantor1">
                  <option value="">Select Member</option>
                  <option v-for="data in tableData" :key="data.id">{{ data.name }}</option>


                </b-form-select>

              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Guarantor 2:</label>
                <b-form-select v-model="Guarantor2" :options="options" placeholder="Guarantor2">
                  <option value="">Select Member</option>
                  <option v-for="data in tableData" :key="data.id">{{ data.name }}</option>


                </b-form-select>

              </b-col>
            </b-row>
          </b-card>
         

          <b-card header="Consumer/Gold Loan Detail" class="mt-3" bg="dark">
            <b-row class="my-1">
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Gold Item Total Wt:</label>

                <b-form-input type="text" id="input-none" v-model="itemtotalwt" placeholder=""></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">

                <label for="input-itemdetail" class="form-label"  >Gold Item Detail:</label>
              <b-form-input type="text" id="input-itemdetail" v-model="itemdetail" placeholder=""></b-form-input>

                <!-- <b-form-select v-model="itemdetail"  >
                  <option value="">Select Gold Item</option>
                  <b-form-select-option value="1">Ring</b-form-select-option>
                  <b-form-select-option value="2">Bracelet </b-form-select-option>
                  <b-form-select-option value="3">Bangle </b-form-select-option>
                  <b-form-select-option value="4">Chain </b-form-select-option>
                  <b-form-select-option value="5">Nose-Pin</b-form-select-option>

                </b-form-select> -->


              </b-col>

              <b-col sm="6" class="mb-3">
                <label for="input-none1" class="form-label">Gold Item Value :</label>

                <b-form-input type="text" id="input-none1" v-model="itemvalue" placeholder=""></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Caret:</label>

                <b-form-input type="text" id="input-none" v-model="Caret" placeholder=""></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Gold Item Quantity :</label>

                <b-form-input type="text" id="input-none" :state="null" v-model="itemquantity"
                  placeholder=""></b-form-input>
              </b-col>

            </b-row>
          </b-card>
        </b-col>
        <b-col sm="4" lg="3" class="position-fixed " style="margin-left:58% ; width:20%">
          <button @click.prevent="generatePdf" class="mb-3 mt-3 btn btn-primary">Print & Download</button>
          <button type="submit" class="btn btn-primary ms-4" variant="success">
            Apply
          </button>
          <b-card class="mt-5" header="Upload Gold Item 1 Photo:">

            <label for="fileInput1" class="d-block upload-image mb-3">
              <img alt="" class="img-fluid" v-if="fileInput1" :src="fileInput1" />
              <input type="file" ref="fileInput1" class="bg d-none" id="fileInput1" @change="onFileSelected(1)" />
            </label>
            <label for="fileInput1" class="btn btn-primary w-100">CHOOSE IMAGE</label>
            <div v-if="error">{{ error }}</div>
          </b-card>

        </b-col>
      </b-row>
    </form>
  </b-container>
</template>
<script>
import ApiExecute from "@/api";
import pdfMake from 'pdfmake/build/pdfmake';
import axios from "axios";
// import pdfFonts from 'pdfmake/build/vfs_fonts';
//   import CompanyForm from "./Form.vue";

export default {
  name: "CreateBank",
  // components: { CompanyForm },
  data() {
    return {
      tableData: [],
      name: "",
      Aadhar: "",
      pan: "",
      Gender: "",
      email: "",
      Phone: "",
      Member: "",
      AccountNumber: "",
      SchemeName: "",
      OpeningDate: new Date().toISOString().slice(0, 10),
      Period: "",
      Maturity: "",
      InterestType: "",
      LoanAmount: "",
      MaturityAmount: "",
      EMIAmount: "",
      FirstEMIDate: new Date().toISOString().slice(0, 10),
      Guarantor1: "",
      Guarantor2: "",
      processingcharge: "",
      formprice: "",
      servicecharge: "",
      itemtotalwt: "",
      itemdetail: "",
      itemvalue: "",
      Caret: "",
      itemquantity: "",
      fileInput1: "",
      roi: "",
      loading: false,
      search: "",
      maxFileSize: 200 * 200, // 1 MB
      error: null,
    };
  },
  mounted() {
    this.fetchData()
    // this.addMonths()
  },
  computed: {
    int() {
      return (this.LoanAmount * this.roi / 1200) * this.Period;
    },
    dueAmount() {
      return parseFloat(this.LoanAmount) + parseFloat(this.int);
    },
  },

  methods: {
    addMonths() {
      console.log(this.Maturity)
      console.log(this.Period)
      const date = new Date(this.FirstEMIDate)
      date.setMonth(date.getMonth() + parseInt(this.Period))
      this.Maturity = date.toISOString().slice(0, 10)
      // console.log(this.Maturity)
      // console.log(this.Period)
      

    },
    // async fetchDetails() {
    //   let user_id = this.user_id
    //   let apiResponse = await ApiExecute("user/show/" + user_id)
    //   this.name = apiResponse.data.name
    // },
    dataa(member1) {
      let jeson = JSON.stringify(member1)
      console.log(jeson)
    },
    onFileSelected(num) {
      console.log("selected imageat new");
      let input = event.target;
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          const fileSize = reader.result.length;
          if (fileSize > this.maxFileSize) {
          this.error = "File size is too large";
        } else {
          this.error = null;

          if (num === 1) {
            this.fileInput1 = e.target.result;
            console.log("selected fileInput1");
          } else if (num === 2) {
            this.uadhar = e.target.result;
            console.log("selected uadhar");
          } else if (num === 3) {
            this.upan = e.target.result;
            console.log("selected upan");
          }
        }}
        reader.readAsDataURL(input.files[0]);
      }
    },
    calculateInterest() {
      const int = (this.LoanAmount * this.roi / 1200) * this.Period;
      this.MaturityAmount = parseFloat(this.LoanAmount) + parseFloat(int);
      this.EMIAmount = this.MaturityAmount / this.Period;
      // this.Maturity = this.FirstEMIDate + this.Period;
      // if (this.Period){
      //   this.addMonths();
      // }
      
    },

    generatePdf() {
      var docDefinition = {
        content: [
         
        { text : 'name: '+ this.name},
        { text : 'Aadhar: '+ this.Aadhar},
        { text : 'pan: '+  this.pan},
        { text : 'Gender: '+  this.gender},

        { text : 'email: '+  this.email},
        { text : 'phone:  '+ this.Phone},
        { text : 'Member: '+  this.Member},
        { text : 'AccountNumber: '+  this.AccountNumber},
        { text : 'SchemeName: '+  this.SchemeName},
        { text : 'OpeningDate: '+  this.OpeningDate},
        { text : 'Period: '+  this.Period},
        { text : 'Maturity:  '+ this.Maturity},
        { text : 'InterestType: '+  this.InterestType},
        { text : 'LoanAmount: '+  this.LoanAmount},
        { text : 'MaturityAmount: '+  this.MaturityAmount},
        { text : 'EMIAmount: '+  this.EMIAmount},
        { text : 'FirstEMIDate:  '+ this.FirstEMIDate},
        { text : 'Guarantor1: '+  this.Guarantor1},
        { text : 'Guarantor2: '+  this.Guarantor2},
        { text : 'processingcharge: '+  this.processingcharge},
        { text : 'formprice: '+  this.formprice},
        { text : 'servicecharge: '+  this.servicecharge},
        { text : 'itemtotalwt: '+  this.itemtotalwt},
        { text : 'itemdetail: '+  this.itemdetail},
        { text : 'itemvalue: '+  this.itemvalue},
        { text : 'Caret: '+  this.Caret},
        { text : 'itemquantity: '+  this.itemquantity},
        { text : 'fileInput1: '+  this.fileInput1},

        ]
      };
      pdfMake.createPdf(docDefinition).download();
    },
    fetchData() {
      axios.get('https://goldloanbackend.onrender.com/api/kycupdate')
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          console.error(error)
        })
    },
    fetchData1() {
      axios.get('https://goldloanbackend.onrender.com/api/kycupdate/')
        .then(response => {
          this.id = response.data.id
        })
        .catch(error => {
          console.error(error)
        })
    },


    submitForm() {
      axios.post('https://goldloanbackend.onrender.com/api/goldloan', {
        name: this.name,
        Aadhar: this.Aadhar,
        pan: this.pan,
        Gender: this.gender,

        email: this.email,
        phone: this.Phone,
        Member: this.Member,
        AccountNumber: this.AccountNumber,
        SchemeName: this.SchemeName,
        OpeningDate: this.OpeningDate,
        Period: this.Period,
        Maturity: this.Maturity,
        InterestType: this.InterestType,
        LoanAmount: this.LoanAmount,
        MaturityAmount: this.MaturityAmount,
        EMIAmount: this.EMIAmount,
        FirstEMIDate: this.FirstEMIDate,
        Guarantor1: this.Guarantor1,
        Guarantor2: this.Guarantor2,
        processingcharge: this.processingcharge,
        formprice: this.formprice,
        servicecharge: this.servicecharge,
        itemtotalwt: this.itemtotalwt,
        itemdetail: this.itemdetail,
        itemvalue: this.itemvalue,
        Caret: this.Caret,
        itemquantity: this.itemquantity,
        fileInput1: this.fileInput1,
      })
        .then(response => {
          console.log(response.data);
          this.$toast.success(` successfully`);
        })
        .catch(error => {
          console.log(error.response.data);
        });
    },


    async add_company() {
      let formData = new FormData();
      for (const key in this.form) {
        formData.append(key, this.form[key]);
      }
      this.loading = true;
      let apiResponse = await ApiExecute("goldloan", "GET", {
        data: formData,
      });
      this.loading = false;
      if (apiResponse.status) {
        console.log(apiResponse.status);
        this.$toast.success(`company added successfully`);
        this.resetData();
      } else if (!apiResponse.status) {
        this.$toast.error(`Enter some data `);
      } else {
        this.$toast.error(`DOMAIN NAME alredy resiterd`);
      }
    },
    resetData: function () {
      this.domain = "";
      this.name = "";
      this.email = "";
      this.Phone = "";
      this.logo = "";
      this.licence = "";
      this.city_id = "";
      this.citys = [];
    },
  },
  watch: {
    EMIAmount: 'calculateInterest',
    roi: 'calculateInterest',
    itemdetail(){
      console.log("gold item",this.itemdetail);
    },
    Period(){
      this.calculateInterest(),
      this.addMonths()
    } ,
    
    MaturityAmount: 'calculateInterest',
    LoanAmount: 'calculateInterest',
    async Member() {
      // let id = this.Member
      axios.get(`http://localhost:3001/api/kyc/${this.Member}`)
        .then(response => {
          // this.id = response.data.id
          this.name = response.data.name,
          this.Aadhar = response.data.adhar,
          this.pan = response.data.pan,
          this.Gender = response.data.gender,
          this.email = response.data.email,
          this.Phone = response.data.phone
          console.log(this.Phone)
          
        })
        .catch(error => {
          console.error(error)
        })


    }
  }
}

</script>
