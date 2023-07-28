<template>
  

<div >
  
  <div   class="d-flex justify-content-between align-items-center mb-5">
    <h4 style="position: fixed;" class="mb-9" > Loan Outstanding</h4>
    <router-link
      :to="{ name: 'ViewBank' }"
      type="submit" 
      class="px-3 btn btn-primary btn-sm"
      style="position: fixed ;left:1200px;"
      margin-left="600px"
    >New Gold Loan
      
    </router-link>
  </div>

  <div>
      <b-col >
          <b-card style="width: fit-content;"    header="Report Listing" align="center ">
             
          <table style="width: fit-content;" class="table-bordered " >
            <thead>
              <tr>


                <th>S.No.</th>
                <th>name</th>
                <!-- <th>Aadhar</th>                      
                <th>PanNumber</th>
                <th>Gender</th> -->
              
                <!-- <th>PhoneNumber</th>                      
                <th>Member</th> -->
                <th>AccountNumber</th>
                <!-- <th>SchemeName</th> -->
                <!-- <th>OpeningDate</th>                       -->
                <!-- <th>Period</th> -->
                <!-- <th>Maturity</th> -->
                <!-- <th>InterestType</th> -->
                <th>LoanAmount</th>                      
                <th>MaturityAmount</th>
                <th>EMIAmount</th>
                <th>FirstEMIDate</th>
                <!-- <th>Guarantor1</th>
                <th>Guarantor2</th>                       -->
                <!-- <th>ProcessingCharge</th>
                <th>FormPrice</th>
                <th>Servicecharge</th> -->
                <th>ItemTotalWt</th>                      
                <!-- <th>ItemDetail</th> -->
                <!-- <th>ItemValue</th> -->
                <!-- <th>Caret</th> -->
                <!-- <th>ItemQuantity</th>                       -->
                <!-- <th>ItemPhoto</th> -->
                <th>Action</th>

               
              </tr>
            </thead>

              <tbody>
                <tr v-for="data in tableData" :key="data.id">
                  <td>{{ data.id }}</td>
                  <td>{{ data.name }}</td>
                  <!-- <td>{{ data.Aadhar }}</td>
                  <td>{{ data.pan }}</td>
                  <td>{{ data.Gender }}</td> -->
                  <!-- <td>{{ data.email }}</td> -->
                  <!-- <td>{{ data.phone }}</td>
                  <td>{{ data.Member }}</td> -->
                  <td>{{ data.AccountNumber }}</td>
                  <!-- <td>{{ data.SchemeName }}</td> -->
                  <!-- <td>{{ data.OpeningDate }}</td> -->
                  <!-- <td>{{ data.Period }}</td> -->
                  <!-- <td>{{ data.Maturity }}</td> -->
                  <!-- <td>{{ data.InterestType }}</td> -->
                  <td>{{ data.LoanAmount }}</td>
                  <td>{{ data.MaturityAmount }}</td>
                  <td>{{ data.EMIAmount }}</td>
                  <td>{{ data.FirstEMIDate }}</td>           
                  <!-- <td>{{ data.Guarantor1 }}</td>
                  <td>{{ data.Guarantor2 }}</td> -->
                  <!-- <td>{{ data.processingcharge }}</td>
                  <td>{{ data.servicecharge }}</td> -->
                  <td>{{ data.itemtotalwt }}</td>
                  <!-- <td>{{ data.MaturityAmount }}</td> -->
                  <!-- <td>{{ data.itemdetail }}</td> -->
                  <!-- <td>{{ data.itemvalue }}</td> -->
                  <!-- <td>{{ data.Caret }}</td> -->
                  <!-- <td>{{ data.itemquantity }}</td> -->
                  <!-- <td><img src=" {{ data.fileInput1 }}"></td> -->
                  <td><router-link :to="{name:'EditBank', 
                    params: {
                      id: data.id
                    
                  }}" type="submit" class="px-3 btn btn-dark btn-sm">
                    Edit
                  </router-link></td>
                </tr>
              </tbody>
          
          </table>

        
        </b-card>
       
        <!-- <h1>{{ data.fileInput1 }}</h1> -->
      </b-col>
  </div>
</div>
</template>

<script>
// import ApiExecute from "@/api";
import moment from "moment";
import axios from "axios";

// import ViewTable from "../../components/ViewTable.vue";

export default {
  name: "ViewUserBank",
  components: {
    // Pagination: VuePaginate,
    // ViewTable,
  },
  data() {
    return {
      galleries: null,
      loading: false,
      limit: 10,
      search: "",
      tableData: []
    };
  },

  mounted() {
    // this.fetchTypes();
    this.fetchData()
  },

  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format("DD-MMM-YYYY hh:mm:ss");
      }
    },
    fetchData() {
      axios.get('https://goldloanbackend.onrender.com/api/goldloan')
      .then(response => {
        this.tableData = response.data;         // handle the API response data here
        // console.log(response.data)
              })
      .catch(error => {
        // handle any errors that occur during the API request
        console.error(error)
      })
  },
    // async fetchTypes(page = 1) {
    //   this.loading = true;
    //   let apiResponse = await ApiExecute(
    //     `merchantservice/?page=${page}&limit=${this.limit}&search=${this.search}`
    //   );
    //   this.loading = false;
    //   if (apiResponse.status) this.galleries1 = apiResponse.data;

    // },
    // async deletecompany(id){
    //         console.warn(id)
    //         let apiResponse = await ApiExecute(`merchantservice/${id}`, "DELETE");
    //         if(apiResponse.status){
    //           this.fetchTypes(1);

    //             this.$toast.success(`company deleted successfully`);
    //         }
    //         }
  },
  watch: {
    search() {
      this.fetchData();
    },
    // limit() {
    //   this.fetchTypes(1);
    // },
  },
};
</script>
