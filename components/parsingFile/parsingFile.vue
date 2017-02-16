<template>
  <div>
    <form enctype="multipart/form-data">
      <label for="current_file_format">Please select the encoding</label>
      <select id="current_file_format" v-model="current_file_format" @change="onFormatChange">
        <option v-for="format in file_formats" :value="format">{{format.name}}</option>
      </select>
      <br>
      <br>
      <input type="file" @change="onFileChange" value="2">
    </form>
    <div>
      <table>
        <tr>
          <th v-for="column in columns">{{column}}</th>
        </tr>
        <tr v-for="record in records">
          <td v-for="item in record">{{item}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script src="./js/parsingFile.js"></script>
<style src="./css/parsingFile.css"></style>

