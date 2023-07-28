<template>
  <b-container fluid>
    <!-- <div>
      <label for="search">Search:</label>
      <input type="text" id="search" v-model="searchTerm" @input="filterOptions" />
      <ul>
        <li v-for="(option, index) in filteredOptions" :key="index" @click="selectOption(option)">
          {{ option.name }}
        </li>
      </ul>
      <div v-if="selectedOption">
        Selected option: {{ selectedOption.name }}
      </div>
    </div> -->
    <form method="post" ref="form" @submit.prevent="submitForm">
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h4 class="mb-6">Voucher Payment </h4>
        <button type="submit" class="btn btn-primary" variant="success">
          Apply
        </button>
        
      </div>
      
      <b-row class="font">
        <b-col sm="8" lg="9">
          <b-card header="Voucher Information" class="mt-3 mb-3">
            <b-row class="my-1">
             
              <b-col sm="6" class="mb-3">
                <label for="input-none" readonly class="form-label">Select loan ID:</label>

                <b-form-select readonly v-model="Member" :options="options">
                  <option value="">Select Member</option>
                  <option v-for="data in tableData" :key="data.id" :value="data.id"  >{{ data.id }}</option>
                </b-form-select>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Voucher Date:</label>

                <b-form-input
                  type="date"
                  v-model="VoucherDate"
                  id="input-none"
                  :state="null"
                  placeholder="Voucher Date"
              
                ></b-form-input>
              </b-col>
              
              
             
            </b-row>
          </b-card>
          <b-card header="Account Information " bg="dark">
            
            <b-row class="my-1">
              
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Scheme Name:</label>

                <b-form-input
                  type="text"
                  v-model="SchemeName"
                  id="input-none"
                  :state="null"
                  placeholder="Scheme Name"
                
                ></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Account   Opening Date:</label>

                <b-form-input
                  type="date"
                  v-model="OpeningDate"
                  id="input-none"
                  :state="null"
                  placeholder="Opening Date"
              
                ></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label"
                  >ROI</label
                >

                <b-form-input
                  type="text"
                  v-model="roi"
                  id="input-none"
                  :state="null"
                  placeholder=""
        
                  ></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label"
                  >Maturity Date :</label
                >

                <b-form-input
                  type="date"
                  v-model="Maturity"
                  id="input-none"
                  :state="null"
                  placeholder=""
            
                ></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label"
                  >Consumer Loan Amount:</label
                >

                <b-form-input
                  type="text"
                  v-model="LoanAmount"
                  id="input-none"
                  :state="null"
                  placeholder=""
        
                  ></b-form-input>
              </b-col>
              
              
              
              <b-col sm="6" class="mb-3">
                <label for="input-none1" class="form-label"
                >Maturity Amount:
              </label>
              
              <b-form-input
              type="number"
              v-model="MaturityAmount"
              id="input-none1"
              :state="null"
              
              title=""
              placeholder=""
        
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="6" class="mb-3">
              <label for="input-none2" class="form-label">EMI Amount:</label>
              
              <b-form-input
              type="text"
              v-model="EMIAmount"
              id="input-none2"
              :state="null"
              placeholder=""
          
                ></b-form-input>
              </b-col>

              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">First EMI Date:</label>
                <b-form-input
                type="date"
                v-model="FirstEMIDate"
                  id="input-none2"
                  :state="null"
                  placeholder=""
      
                ></b-form-input>
                
              </b-col>
              

             
        </b-row>
      </b-card>
      <b-card  class="mt-3" header="Recipt Information " bg="dark">
       
        <b-row class="my-1">

          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Amount :</label>

            <b-form-input
              type="number"
              v-model="processingcharge"
              id="input-none"
              :state="null"
              placeholder=""
            
            ></b-form-input>
          </b-col>
          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Recipt No:</label>

            <b-form-input
              type="text"
              v-model="formprice"
              id="input-none"
              :state="null"
              placeholder=""
        
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label"
              >Narration</label
            >

            <b-form-input
              type="number"
              v-model="servicecharge"
              id="input-none"
              :state="null"
              placeholder=""
        
            ></b-form-input>
          </b-col>
          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Voucher Date:</label>

            <b-form-input
              type="date"
              v-model="VoucherDate"
              id="input-none"
              :state="null"
              placeholder="Voucher Date"
          
            ></b-form-input>
          </b-col>
        </b-row>
      </b-card>

        
        </b-col>
        <b-col sm="4" lg="3" class="position-fixed " style="margin-left:58% ; width:20%">
        
        </b-col>
      </b-row>
    </form>
    
  </b-container>
</template>

<script>
import ApiExecute from "@/api";
import axios from "axios";

export default {
  name: "ViewAeps",
  data() {
    return {
      tableData: [],
      
      
      VoucherDate:"",
      servicecharge:"",
      formprice:"",
      processingcharge:"",
      FirstEMIDate:"",
      EMIAmount:"",                        
      // MaturityAmount:"",
      LoanAmount:"",
      MaturityAmount: "",
      // EMIAmount: "",
      // FirstEMIDate: "",
      OpeningDate: "",
      Maturity: "",
      SchemeName: "",
      // VoucherDate: "",
      Member: "",
      loading: false,
      limit: 8,
      search: "",
    };
  },

  mounted() {
    this.fetchData()
    // this.addMonths()
  },

  methods: {
    fetchData() {
      axios.get('http://127.0.0.1:3001/api/goldloan')
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          console.error(error)
        })
    },

    async add_type() {
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("slug", this.slug);
      formData.append("description", this.description);

      this.loading = true;
      let apiResponse = await ApiExecute("service", "POST", {
        data: formData,
      });

      this.loading = false;

      if (apiResponse.status) {
        this.$toast.success(`service added successfully`);
        this.resetData();
      } else {
        this.$toast.error( `Network Error Can't Make Transection`);
      }
    },
    resetData: function () {
      this.title = "";
      this.slug = "";
      this.description, "";
    },
  },
  watch:{
    async Member() {
      // let id = this.Member
      axios.get(`http://localhost:3001/api/kyc/${this.Member}`)
        .then(response => {
          // this.id = response.data.id
          this.AccountNumber = response.data.AccountNumber,
          this.SchemeName  = response.data.SchemeName,
          this.OpeningDate  = response.data.OpeningDate,
          this.Period  = response.data.Period,        
          this.Maturity = response.data.Maturity,
          this.InterestType = response.data.InterestType,
          this.LoanAmount = response.data.LoanAmount,
          this.MaturityAmount = response.data.MaturityAmount,
          this.EMIAmount = response.data.EMIAmount,
          this.FirstEMIDate = response.data.FirstEMIDate,
          this.Guarantor1 = response.data.Guarantor1,
          this.Guarantor2 = response.data.Guarantor2,
          this.processingcharge = response.data.processingcharge,
          this.formprice = response.data.formprice,
          this.servicecharge = response.data.servicecharge,
          this.itemtotalwt = response.data.itemtotalwt,
          this.itemdetail = response.data.itemdetail,
          this.itemvalue = response.data.itemvalue,
          this.Caret = response.data.Caret,
          this.itemquantity = response.data.itemquantity,
          this.fileInput1 = response.data.fileInput1,
          this.roi = response.data.roi
          
        })
        .catch(error => {
          console.error(error)
        })


    }
  }
};

</script>
