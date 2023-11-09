<template>
    <LoginForm v-if="!isAuthenticated"></LoginForm>
   
    
    <!-- Dashboard table -->
    <v-card v-else>
        <!-- Search -->
        <v-card-title>
            <v-row>
                <v-col>
                    <v-select v-model="selectedColumn" :items="searchOptions" label="Search In"></v-select>
                </v-col>
                <v-col>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-card-title>

        <!-- Table -->
        <v-data-table v-model:items-per-page="itemsPerPage" :headers="headers" :items="filteredData" item-key="name"
            class="elevation-1" :search="search">
            <template v-slot:[`item.actions`]="{ item }">
                <v-btn class="btn-primary" @click="showDetailsModal(item)">Details</v-btn>
            </template>
        </v-data-table>

        <!-- Modal -->
        <v-dialog v-model="detailsModalVisible" max-width="600">
            <v-card>
                <v-card-title class="headline text-h6">Details</v-card-title>
                <v-card-text>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">ID:</span>
                        <span class="detail-value">{{ selectedRowData.id }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Dataset:</span>
                        <span class="detail-value">{{ selectedRowData.pk_dataset }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Name:</span>
                        <span class="detail-value">{{ selectedRowData.name }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Quote:</span>
                        <span class="detail-value">{{ selectedRowData.personal_quote }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Country:</span>
                        <span class="detail-value">{{ selectedRowData.country }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Region:</span>
                        <span class="detail-value">{{ selectedRowData.region }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">LatLng:</span>
                        <span class="detail-value">{{ selectedRowData.latlng }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Salary:</span>
                        <span class="detail-value">{{ selectedRowData.salary }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Birthday:</span>
                        <span class="detail-value">{{ selectedRowData.birthday }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Entry Date:</span>
                        <span class="detail-value">{{ selectedRowData.entry_date }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Address:</span>
                        <span class="detail-value">{{ selectedRowData.address }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Phone:</span>
                        <span class="detail-value">{{ selectedRowData.phone }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Experience Score:</span>
                        <span class="detail-value">{{ selectedRowData.experience_score }}</span>
                    </div>
                    <div class="mb-2">
                        <span class="mr-2 font-weight-bold">Favorite Food:</span>
                        <span class="detail-value">{{ selectedRowData.favorite_food }}</span>
                    </div>
                </v-card-text>

                <v-card-actions>
                    <v-btn @click="closeDetailsModal" color="primary">Close</v-btn>
                </v-card-actions>
            </v-card>

        </v-dialog>
    
    </v-card>
    
</template>
  
<script>
import tabledata from "../data/data.json"
import LoginForm from '@/components/LoginForm.vue'
import { useAuth0 } from '@auth0/auth0-vue';
export default {
    setup() {
      const { loginWithRedirect, user, isAuthenticated } = useAuth0();
      return {
        login: () => {
          loginWithRedirect();
        },
        user,
        isAuthenticated
      };
      
    },
    components: {
        LoginForm
    },
    data() {
        return {
            itemsPerPage: 5,
            headers: [
                {
                    title: 'ID',
                    key: 'id',
                    align: 'start',
                    sortable: false,
                },
                // {
                //     title: 'Dataset',
                //     key: 'pk_dataset',
                // },
                {
                    title: 'Name',
                    key: 'name',
                },
                {
                    title: 'Country',
                    key: 'country',
                },
                {
                    title: 'Region',
                    key: 'region',
                },
                // {
                //     title: 'LatLng',
                //     key: 'latlng',
                // },
                //   {
                //     title: 'Quote',
                //     key: 'personal_quote',
                //   },
                {
                    title: 'Salary',
                    key: 'salary',
                },
                {
                    title: 'Monthly Salary',
                    key: 'monthly_salary',
                },
                {
                    title: 'Birthday',
                    key: 'birthday',
                },
                {
                    title: 'Entry Date',
                    key: 'entry_date',
                },
                {
                    title: 'Address',
                    key: 'address',
                },
                {
                    title: 'Phone',
                    key: 'phone',
                },
                {
                    title: 'Experience Score',
                    key: 'experience_score',
                },
                // {
                //     title: 'Favorite Food',
                //     key: 'favorite_food',
                // },
                {
                    title: 'Actios',
                    value: 'actions',
                    sortable: false
                }
            ],
            searchOptions: [
                { title: 'Name', value: 'name' },
                { title: 'Country', value: 'country' },
                { title: 'Region', value: 'region' },
                { title: 'Address', value: 'address' },
                { title: 'Experience Score', value: 'experience_score' },
                { title: 'Phone', value: 'phone' },
                { title: 'Birthday', value: 'birthday' },
            ],
            data: [],
            selectedColumn: 'name',
            search: '',
            detailsModalVisible: false,
            selectedRowData: null,
        };
    },
    mounted() {
        this.data = tabledata.map((item) => {
            const monthlySalary = item.salary ? this.calculateMonthlySalary(item.salary) : null;
            return {
                ...item,
                monthly_salary: monthlySalary,
            };
        });
    },
    computed: {
        filteredData() {
            const searchTerm = this.search.toLowerCase();
            const column = this.selectedColumn;
            return this.data.filter((item) => {
                if (item[column] !== undefined) {
                    if (typeof item[column] === 'string') {
                        return item[column].toLowerCase().includes(searchTerm);
                    } else if (typeof item[column] === 'number') {
                        return item[column].toString().includes(searchTerm);
                    }
                } else {
                    return true;
                }
            });
        },
    },
    watch: {
        selectedColumn: 'filterData',
    },
    methods: {
        filterData() {
            this.$forceUpdate();
        },
        calculateMonthlySalary(annualSalary) {
            const annualSalaryNumber = Number(annualSalary.replace('$', '').replace(',', ''));
            if (!isNaN(annualSalaryNumber)) {
                const monthlySalary = annualSalaryNumber / 12;
                return monthlySalary.toFixed(2);
            } else {
                return null;
            }
        },
        showDetailsModal(rowData) {
            console.log(rowData)
            this.selectedRowData = rowData;
            this.detailsModalVisible = true;
        },
        closeDetailsModal() {
            this.detailsModalVisible = false;
        },
    },
};
</script>

