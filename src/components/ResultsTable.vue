<template>
  <div class="table-responsive">
    <table class="table table-bordered table-sm table-striped">
      <thead>
        <tr>
          <th colspan="7" class="title">
            Estimated Tax Revenue Impacts for Major City of Philadelphia Taxes by Fiscal Year
            <br />
            <span class="subtitle">Dollars in thousands</span>
          </th>
        </tr>
        <tr>
          <th scope="col" rowspan="3">Tax</th>
          <th scope="col" colspan="6" class="text-center">Differences Relative to March Baseline</th>
        </tr>
        <tr>
          <th scope="col" colspan="3" class="text-center right-border">Moderate</th>
          <th scope="col" colspan="3" class="text-center">Severe</th>
        </tr>
        <tr>
          <th scope="col" class="text-center">2020</th>
          <th scope="col" class="text-center">2021</th>
          <th scope="col" class="text-center right-border">Combined</th>
          <th scope="col" class="text-center">2020</th>
          <th scope="col" class="text-center">2021</th>
          <th scope="col" class="text-center">Combined</th>
        </tr>
      </thead>
      <tbody>
        <tr class="test">
          <th scope="row" class="font-weight-normal">
            Wage & Earnings
            <sup>&#8224;</sup>
          </th>
          <td class="currency">(57,104)</td>
          <td class="currency">(51,524)</td>
          <td class="currency right-border">(108,627)</td>
          <td class="currency">(120,968)</td>
          <td class="currency">(138,414)</td>
          <td class="currency">(259,382)</td>
        </tr>
        <tr class="test">
          <th scope="row" class="font-weight-normal">Sales</th>
          <td class="currency">(26,485)</td>
          <td class="currency">(38,316)</td>
          <td class="currency right-border">(64,801)</td>
          <td class="currency">(38,190)</td>
          <td class="currency">(64,379)</td>
          <td class="currency">(102,569)</td>
        </tr>
        <tr class="test">
          <th scope="row" class="font-weight-normal">
            Business Income & Receipts
            <sup>&#8224;&#8224;</sup>
          </th>
          <td class="currency">(374,626)</td>
          <td class="currency">299,734</td>
          <td class="currency right-border">(74,892)</td>
          <td class="currency">(376,199)</td>
          <td class="currency">252,333</td>
          <td class="currency">(123,865)</td>
        </tr>
        <tr class="test">
          <th scope="row" class="font-weight-normal">Realty Transfer</th>
          <td class="currency">(24,414)</td>
          <td class="currency">(25,619)</td>
          <td class="currency right-border">(50,033)</td>
          <td class="currency">(24,414)</td>
          <td class="currency">(59,772)</td>
          <td class="currency">(84,186)</td>
        </tr>
        <tr class="test">
          <th scope="row" class="font-weight-normal">Beverage</th>
          <td class="currency">(3,941)</td>
          <td class="currency">(3,608)</td>
          <td class="currency right-border">(7,549)</td>
          <td class="currency">(7,882)</td>
          <td class="currency">(10,124)</td>
          <td class="currency">(18,006)</td>
        </tr>
        <tr class="test">
          <th scope="row" class="font-weight-normal">Amusement</th>
          <td class="currency">(4,474)</td>
          <td class="currency">(6,778)</td>
          <td class="currency right-border">(11,252)</td>
          <td class="currency">(5,752)</td>
          <td class="currency">(9,133)</td>
          <td class="currency">(14,885)</td>
        </tr>
        <tr class="test">
          <th scope="row" class="font-weight-normal">
            Net Profits
            <sup>&#8224;,&#8224;&#8224;</sup>
          </th>
          <td class="currency">(46,278)</td>
          <td class="currency">36,801</td>
          <td class="currency right-border">(9,477)</td>
          <td class="currency">(46,552)</td>
          <td class="currency">30,825</td>
          <td class="currency">(15,727)</td>
        </tr>
        <tr class="test">
          <th scope="row" class="font-weight-normal">Parking</th>
          <td class="currency">(8,012)</td>
          <td class="currency">(9,066)</td>
          <td class="currency right-border">(17,078)</td>
          <td class="currency">(13,353)</td>
          <td class="currency">(15,430)</td>
          <td class="currency">(28,782)</td>
        </tr>
        <tr class="font-weight-bold test">
          <th scope="row" class="top-border">Total Difference</th>
          <td class="currency top-border">(545,333)</td>
          <td class="currency top-border">201,625</td>
          <td class="currency top-border right-border">(343,709)</td>
          <td class="currency top-border">(633,309)</td>
          <td class="currency top-border">(14,093)</td>
          <td class="currency top-border">(647,402)</td>
        </tr>
        <tr class="font-weight-bold test">
          <th scope="row">Baseline</th>
          <td class="currency">4,243,756</td>
          <td class="currency">4,411,761</td>
          <td class="currency right-border">8,655,517</td>
          <td class="currency">4,243,756</td>
          <td class="currency">4,411,761</td>
          <td class="currency">8,655,517</td>
        </tr>
        <tr class="font-weight-bold test">
          <th scope="row">Percent Change from Baseline</th>
          <td class="text-right">&#8722;12.9%</td>
          <td class="text-right">4.6%</td>
          <td class="text-right right-border">&#8722;4.0%</td>
          <td class="text-right">&#8722;14.9%</td>
          <td class="text-right">&#8722;0.3%</td>
          <td class="text-right">&#8722;7.5%</td>
        </tr>
      </tbody>
      <tfoot class="footer">
        <tr>
          <td colspan="7">
            <sup>&#8224;</sup>&nbsp;Includes both the City and PICA portions of the tax
            <br />
            <sup>&#8224;&#8224;</sup>&nbsp;Large shifts in revenue from FY20 to FY21 due to changes to the filing date for BIRT and NPT from April 2020 to July 2020
            <br />Note: Baseline estimates from FY21 - FY25 Five Year Financial Plan, as proposed on March 5, 2020.
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: "ResultsTable"
};
</script>


<style scoped>
.test > td {
  min-width: 125px;
}

.test > th {
  min-width: 200px;
}
.title {
  font-size: 1.3rem;
}
.subtitle {
  font-style: italic;
  font-weight: normal;
  font-size: 0.9rem;
}
.currency {
  text-align: right;
}

.currency:before {
  content: "$";
  float: left;
  padding-right: 4px;
}

.top-border {
  border-top: 4px solid #dee2e6;
}
.right-border {
  border-right: 4px solid #dee2e6;
}
.footer {
  font-style: italic;
  font-size: 0.8rem;
}
</style>
