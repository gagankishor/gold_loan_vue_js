<template>
  <b-container fluid>
    <form method="post" ref="form" @submit.prevent="submitForm">
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h4 class="mb-6">Receipt </h4>
        <button type="submit" class="btn btn-primary" variant="success">
          Apply
        </button>
        
      </div>
      
      <b-row class="font">
        <b-col sm="8" lg="9">
          <b-card header="Voucher Information" class="mt-3 mb-3">
            <b-row class="my-1">
             
              <b-col sm="6" class="mb-3">
                <label for="input-none" readonly class="form-label">Select Member:</label>

                <b-form-select  v-model="Member" :options="options">
                  <option value="">Select Member</option>
                  <option v-for="data in tableData" :key="data.id" onclick="dataa(data)" :value="data.idkycupdate">{{ data.name }}</option>
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

          <!-- <b-card header="Consumer/Gold Loan Detail" class="mt-3" bg="dark">
            <b-row class="my-1">
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label">Gold Item Total Wt:</label>

                <b-form-input
                  type="text"
                  id="input-none"
                  v-model="itemtotalwt"
                  placeholder=""
          
                ></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label"
                  >Gold Item Detail:</label
                  >
                  <b-form-select v-model="itemdetail" >
                  <option value="">Select Gold Item</option>
                  <b-form-select-option value="1">Ring</b-form-select-option>
                  <b-form-select-option value="2">Bracelet </b-form-select-option>
                  <b-form-select-option value="3">Bangle </b-form-select-option>
                  <b-form-select-option value="4">Chain </b-form-select-option>
                  <b-form-select-option value="5">Nose-Pin</b-form-select-option>

                </b-form-select>

                
              </b-col>

              <b-col sm="6" class="mb-3">
                <label for="input-none1" class="form-label">Gold Item Value :</label>

                <b-form-input
                  type="text"
                  id="input-none1"
                  v-model="itemvalue"                 
                  placeholder=""
            
                ></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label"
                  >Caret:</label
                >

                <b-form-input
                  type="text"
                  id="input-none"
                  v-model="Caret"
                  placeholder=""
              
                ></b-form-input>
              </b-col>
              <b-col sm="6" class="mb-3">
                <label for="input-none" class="form-label"
                  >Gold Item Quantity :</label
                >

                <b-form-input
                  type="text"
                  id="input-none"
                  :state="null"
                  v-model="itemquantity"
                  placeholder=""
                ></b-form-input>
              </b-col>

            </b-row>
          </b-card> -->
        </b-col>
        <b-col sm="4" lg="3" class="position-fixed " style="margin-left:58% ; width:20%">
        
        </b-col>
      </b-row>
    </form>
  </b-container>
</template>

<script>
import ApiExecute from "@/api";

export default {
  name: "ViewAeps",
  data() {
    return {
      title: "",
      slug: "",
      description: "",
      loading: false,
      limit: 8,
      search: "",
    };
  },

  methods: {
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
};
</script>
