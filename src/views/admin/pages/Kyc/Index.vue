<template>
  <div class="d-flex justify-content-between align-items-center mb-5">
    <h4 style="position: fixed;" class="mb-6"> Customer Details</h4>
    <router-link :to="{name:'CreateBank'}" type="submit" style="position: fixed ;left:1170px;" class="px-3 btn btn-primary btn-sm">
      Add New Customer
    </router-link>
  </div>
  

  <div>
      <b-col >
          <b-card style="width: fit-content;" header="Report Listing">
              
            
    <div >
          <!-- <div v-if="loading">Loading</div> -->
          
          <table class="table-bordered " >
            <thead>
              <tr>

                
                <th>S.No.</th>
                <th>Name</th>
                <th>FatherName</th>                      
                <th>DateOfBirth</th>
                <th>GrossIncome</th>
                <!-- <th>email</th> -->
                <th>PhoneNumber</th>                      
                <th>Gender</th>
                <th>Adhar</th>
                <th>PanNumber</th>
                <!-- <th>BankName</th>                       -->
                <!-- <th>BankAcNumber</th> -->
                <!-- <th>BankIfse</th> -->
                <!-- <th>Photo</th> -->
                <!-- <th>AadharPhoto</th>                       -->
                <!-- <th>PanPhoto</th> -->
                <th>Action</th>
                
               
              </tr>
            </thead>

              <tbody>
                <tr v-for="data in tableData" :key="data.id">
                  <td>{{ data.idkycupdate }}</td>
                  <td>{{ data.name }}</td>
                  <td>{{ data.fname }}</td>
                  <td>{{ data.dob }}</td>
                  <td>{{ data.grossincom }}</td>
                  <td>{{ data.phone }}</td>
                  <td>{{ data.gender }}</td>
                  <td>{{ data.adhar }}</td>
                  <td>{{ data.pan }}</td>
                  <!-- <td>{{ data.bankname }}</td> -->
                  <!-- <td>{{ data.bankacn }}</td> -->
                  <!-- <td>{{ data.bankifse }}</td> -->
                  <!-- <td><img src=" {{ data.uphoto }}"/> </td> -->
                  <!-- <td><img src="{{ data.uadhar }}" ></td> -->
                  <!-- <td><img src="{{ data.upan }}" ></td> -->
                  <td><router-link :to="{name:'EditKyc',
                    params: {
                      id: data.idkycupdate
                    }}" type="submit" class="px-3 btn btn-dark btn-sm">
                    Edit
                  </router-link></td>
                  
                </tr>
                
              </tbody>
          
          </table>

        </div>
        </b-card>
      </b-col>
    </div>
    <!-- <div><img v-for="(imageSrc, index) in imageSrcs" :key="index" :src="imageSrc" /></div> -->
</template>

<script>
import axios from "axios";
// import { atob } from 'atob';


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
    this.fetchData()
  },

  methods: {
    fetchData() {
      axios.get('http://127.0.0.1:3001/api/kycupdate')
      .then(response => {
        this.tableData = response.data;
              })
      .catch(error => {
        console.error(error)
      })
  },
   
  },
  watch: {
    search() {
      this.fetchData();
    },
  },
};
</script>
