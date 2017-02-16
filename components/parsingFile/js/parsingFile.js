export default {
  name: 'parsingFile',
  data () {
    return {
      columns: [],
      records: [],
      file_formats: [
        {
          name: 'UTF-8',
          key: 'utf-8',
          code: 'ISO-8859-1'
        }, {
          name: '1251',
          key: '1251',
          code: 'CP1251'
        }
      ],
      current_file_format: null,
      current_file: null,
      fileinput: '',
    }
  },
  created: function () {
    this.current_file_format = this.file_formats[1];
  },
  methods: {
    /* method when a file changes */
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (files.length > 0) this.current_file = files[0];
      if (!this.current_file) return;
      this.createInput(this.current_file);
    },
    /* method of changing the format */
    onFormatChange(){
      if (this.current_file) this.createInput(this.current_file);
    },
    /* main method parsing csv file and change in to object */
    createInput(file) {
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.fileinput = reader.result;
        var rows = this.fileinput.split('\n');
        var columns = rows[0].split(';');
        var records = [];
        if (rows.length > 1) {
          for (var i = 1; i < rows.length; i++) {
            var objects = {};
            var items = rows[i].split(';');
            for (var j = 0; j < columns.length; j++) {
              objects[columns[j]] = items[j];
            }
            records.push(objects);
          }
        }
        this.columns = columns;
        this.records = records;
      };
      if (this.current_file_format) {
        reader.readAsText(file, this.current_file_format.code);
      }
    }
  },
}
