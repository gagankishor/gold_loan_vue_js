<template>
  <b-container fluid>
    <form method="post" ref="form" @submit.prevent="submitForm">
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h4 class="mb-6">Edit Kyc</h4>
        <!-- <b-button type="submit" class="px-5 btn btn-primary" variant="success">  </b-button> -->
        <button type="submit" class="btn btn-primary " variant="success">SAVE</button>
      </div>

      <div v-if="loading">Loading</div>
      <b-row>
    <b-col sm="8" lg="9">
      <b-card header="Basic Information">
        <b-row class="my-1">
          <b-col  >
            <label for="input-none" class="form-label">NAME:</label>

            <b-form-input
              type="text"
              v-model="name"
              id="input-none"
              :state="null"
              placeholder="NAME"
              required
            ></b-form-input>
          </b-col>
          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Father/Husband  Name:</label>
            <b-row>
              
            <b-col sm="3">
              <b-form-select  v-model="prefix"
              :options="options"
              placeholder="CITY">
                <option value="">select </option>
                <option value="1">s/o </option>
                <option value="2">w/o</option>
                <option value="3">c/o </option>
                <option value="4">d/o </option>
                <option value="5">n/a </option>


              </b-form-select>
            </b-col>
            <b-col sm="9">
            <b-form-input
              type="text"
              v-model="fname"
              id="input-none"
              :state="null"
              placeholder=" Name"
              required
            ></b-form-input>
          </b-col>
        </b-row>
          </b-col>
         
        </b-row>
        <b-row class="my-1">
          
          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">DOB:</label>

            <b-form-input
              type="date"
              v-model="dob"
              id="input-none"
              :state="null"
              placeholder="DOB"
              required
            ></b-form-input>
          </b-col>
          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Gross Monthly Income:</label>

            <b-form-input
              type="number"
              v-model="grossincom"
              id="input-none"
              :state="null"
              placeholder="Gross Monthly Income"
              required
            ></b-form-input>
          </b-col>
        </b-row>
        
        <b-row class="my-1">
          

          <b-col sm="6" class="mb-3">
            <label for="input-none1" class="form-label">Phone Number: </label>

            <b-form-input
              type="text"
              v-model="phone"
              id="input-none1"
              pattern="\d{10}"
              required
              title="Please enter 10 digit mobile no."
              placeholder="Phone"
              
            ></b-form-input>
          </b-col>
        
          

          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Gender:</label>

            <b-form-select
              v-model="gender"
              :options="options"
              placeholder="CITY"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <!-- <option
                v-for="city in citys"
                :value="city.id"
                :key="city.id"
                required
              >
                {{ city.name }}
              </option> -->
            </b-form-select>
          </b-col>
        
        </b-row>
        <b-row class="my-1">
          

          <b-col sm="12" class="mb-3">
            <label for="input-phone" class="form-label">Address </label>

            <b-form-input
              type="text"
              v-model="address"
              id="input-phone"
              required
              title="Please enter 10 digit mobile no."
              placeholder="Address"
              
            ></b-form-input>
          </b-col>
        
          

          <!-- <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Gender:</label>

            <b-form-select
              v-model="gender"
              :options="options"
              placeholder="CITY"
            >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
             <option
                v-for="city in citys"
                :value="city.id"
                :key="city.id"
                required
              >
                {{ city.name }}
              </option>
            </b-form-select>
          </b-col> -->
        
        </b-row>

      </b-card>
        <b-card class="mt-3" header="KYC Information">
          <b-row>
          <b-col sm="6" class="mb-3">
          <label for="input-none" class="form-label">Aadhar Number:</label>

          <b-form-input
            type="text"
            v-model="adhar"
            title="Please enter 12 digit Aadhar no."
            id="input-none"
            pattern="\d{12}"
            :state="null"
            placeholder="Aadhar No"

            required
          ></b-form-input>
        </b-col>
        <b-col sm="6" class="mb-3">
          <label for="input-none2" class="form-label">PAN Number:</label>

          <b-form-input
            type="text"

            v-model="pan"
            id="input-none2"
            :state="null"
            placeholder="PAN"
            
          ></b-form-input>
        </b-col>
      </b-row>        </b-card>
        <b-card class="mt-3" header="Bank Information">
          
        <b-row class="my-1">
          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Bank Name:</label>

            <b-form-input
              type="text"
              v-model="bankname"
              id="input-none"
              :state="null"
              placeholder="Enter Bank Name"
              
            ></b-form-input>
          </b-col>
          <b-col sm="6" class="mb-3">
            <label for="input-none" class="form-label">Bank Account Number:</label>

            <b-form-input
              type="number"
              v-model="bankacn"
              id="input-none"
              :state="null"
              placeholder="Enter Bank Account Number"
              
            ></b-form-input>
          </b-col>

          <b-col sm="6" class="mb-3">
            <label for="input-none1" class="form-label">Bank IFSE Code:</label>
            <b-form-input
              type="text"
              v-model="bankifse"
              id="input-none1"
              
              title="Please enter IFSC code no."
              placeholder="Enter Bank Code"
              
            ></b-form-input>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
    <b-col sm="4" lg="3">
      <b-card header="Upload Photo">
        <label for="uphoto" class="d-block upload-image mb-3">
          <img
            alt=""
            class="img-fluid"
            v-if="uphoto" :src="uphoto"
          />
          <input
            type="file"
            ref="fileInput1"
            class="bg d-none"
            id="uphoto"
            
            @change="onFileSelected(1)"/>
        </label>
        <label for="uphoto" class="btn btn-primary w-100">CHOOSE IMAGE</label>
      </b-card>
      <b-card header="Upload Pan" class="mt-3 mb-3">
        <label for="uadhar" class="d-block upload-image mb-3">
          <img
          v-if="uadhar" :src="uadhar"
            alt=""
            class="img-fluid"
          />
          <input
            type="file"
            ref="fileInput"
            class="bg d-none"
            id="uadhar"
            
            @change="onFileSelected(2)"
          />
        </label>
        <label for="uadhar" class="btn btn-primary w-100">CHOOSE IMAGE</label>
      </b-card>
      <b-card header="Upload Aadhar" >
        <label for="upan" class="d-block upload-image mb-3">
          <img
            alt=""
            class="img-fluid"
            v-if="upan" :src="upan"
          />
          <input
          type="file"
          ref="fileInput3"
          class="bg d-none"
          id="upan"
          @change="onFileSelected(3)"
            
          />
        </label>
        <label for="upan" class="btn btn-primary w-100">CHOOSE IMAGE</label>
      </b-card>
    </b-col>
  </b-row>
    </form>
  </b-container>
</template>
<script>
// import ApiExecute from "@/api";
import axios from 'axios'
// import CompanyForm from "./Form.vue";

export default {
  name: "EditBank",
  // components: { CompanyForm },
  data() {
    return {
        // imageData: [],
        name: "",
        fname: "",
        dob: "",
        grossincom: "",
        phone: "",
        gender: "",
        adhar: "",
        pan: "",
        bankname: "",
        bankacn: "",
        bankifse: "",
        uphoto:"",
        uadhar:"",
        upan:"",
        address:"",
    
      loading: false,
      search: "",
    };
  },

  mounted(){
    this.fetchdataall()
  },
  methods: {



    fetchdataall () {
      // let id = this.Member
      console.log( "router id is",this.$route.params.id)
      axios.get(`http://localhost:3001/api/kyc/${this.$route.params.id}`)
        .then(response => {
          this.name = response.data.name,
          this.fname = response.data.fname,
          this.dob = response.data.dob,
          this.grossincom = response.data.grossincom,
          this.phone = response.data.phone,
          this.gender = response.data.gender,
          this.adhar = response.data.adhar,
          this.pan = response.data.pan,
          this.bankname = response.data.bankname,
          this.bankacn = response.data.bankacn,
          this.bankifse = response.data.bankifse,
          this.uphoto = response.data.uphoto,
          this.uadhar = response.data.uadhar,
          this.upan = response.data.upan,
          this.address = response.data.Address
          console.log("this is", this.name)
          
        })
        .catch(error => {
          console.error(error)
        })


    },
    updateForm(form) {
      console.log("form", form);
      this.form = form;
    },
    onFileSelected(num) {
      console.log("selected imageat new");

      let input = event.target;
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          if (num === 1) {
            this.uphoto = e.target.result;
            console.log("selected uphoto");

          } else if (num === 2) {
            this.uadhar = e.target.result;
            console.log("selected uadhar");

          } else if (num === 3) {
            this.upan = e.target.result;
            console.log("selected upan");

          }
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
    


   
    submitForm() {
      console.log(this.selectedFile1);
        console.log(this.selectedFile2);
        console.log(this.selectedFile3);
      axios.put(`http://127.0.0.1:3001/api/kyc/${this.$route.params.id}`, {
        name: this.name,
        
        fname: this.fname,
        dob: this.dob,
        grossincom: this.grossincom,
        phone: this.phone,
        gender: this.gender,
        adhar: this.adhar,
        pan: this.pan,
        bankname: this.bankname,
        bankacn: this.bankacn,
        bankifse: this.bankifse,
        uphoto:this.uphoto,
        uadhar:this.uadhar,
        upan:this.upan
      })
      .then(response => {
        
        console.log(response.data);
        // this.$router.push({
        //      name: 'ViewAeps'
        //  })

        this.$toast.success(`member Updated successfully`);

        // Do something with the response
      })
      .catch(error => {
        console.log(error.response.data);
        this.$toast.error(`Error`);

      });
    },
    

    
    
  },
  watch: {
    
  }
};


</script>
