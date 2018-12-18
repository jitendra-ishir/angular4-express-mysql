"use strict";
var _this = this;
var mysql = require("mysql");
var db = (function () {
    _this.pool = mysql.createPool({
        connectionLimit: 12,
        host: 'localhost',
        user: 'sa',
        password: '(IJN8uhb',
        database: 'yelpcamp',
        charset: 'utf8'
    });
    _this.getConnection = function (cb) {
        _this.pool.getConnection(cb);
    };
    _this.query = function (sql, values) { return new Promise(function (resolve, reject) {
        _this.pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err);
            }
            else {
                connection.query(sql, values, function (err, results) {
                    connection.release();
                    if (err) {
                        console.log(err);
                    }
                    else {
                        resolve(results);
                    }
                });
            }
        });
    }); };
    return _this;
})();
module.exports = db;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFiYXNlL2RiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQXFDWTtBQXJDWiw2QkFBZ0M7QUFFaEMsSUFBTSxFQUFFLEdBQUcsQ0FBQztJQUNYLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUM1QixlQUFlLEVBQUUsRUFBRTtRQUNuQixJQUFJLEVBQUUsV0FBVztRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE9BQU8sRUFBRSxNQUFNO0tBQ2YsQ0FBQyxDQUFDO0lBRUgsS0FBSSxDQUFDLGFBQWEsR0FBRyxVQUFDLEVBQU87UUFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0lBRUYsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFDLEdBQVEsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ25FLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQUMsR0FBUSxFQUFFLFVBQWU7WUFDakQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsVUFBQyxHQUFRLEVBQUUsT0FBWTtvQkFDcEQsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUVyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2xCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1AsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQixDQUFDO2dCQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLEVBaEJzQyxDQWdCdEMsQ0FBQztJQUVILE1BQU0sQ0FBQyxLQUFJLENBQUM7QUFDYixDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsaUJBQVMsRUFBRSxDQUFDIiwiZmlsZSI6ImRhdGFiYXNlL2RiLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpO1xyXG5cclxuY29uc3QgZGIgPSAoKCkgPT4ge1xyXG5cdHRoaXMucG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG5cdFx0Y29ubmVjdGlvbkxpbWl0OiAxMixcclxuXHRcdGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG5cdFx0dXNlcjogJ3NhJyxcclxuXHRcdHBhc3N3b3JkOiAnKElKTjh1aGInLFxyXG5cdFx0ZGF0YWJhc2U6ICd5ZWxwY2FtcCcsXHJcblx0XHRjaGFyc2V0OiAndXRmOCdcclxuXHR9KTtcclxuXHJcblx0dGhpcy5nZXRDb25uZWN0aW9uID0gKGNiOiBhbnkpID0+IHtcclxuXHRcdHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGNiKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnF1ZXJ5ID0gKHNxbDogYW55LCB2YWx1ZXM6IGFueSkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0dGhpcy5wb29sLmdldENvbm5lY3Rpb24oKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29ubmVjdGlvbi5xdWVyeShzcWwsIHZhbHVlcywgKGVycjogYW55LCByZXN1bHRzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUocmVzdWx0cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbmV4cG9ydCA9IGRiOyJdfQ==
