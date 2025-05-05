<?php
 header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
 header("Access-Control-Allow-Methods: POST");
 header("Access-Control-Max-Age: 3600");
 header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once('db-config.php');
// get posted data
$reuestData = json_decode(file_get_contents("php://input"));                    

// $returnResult;

// $lastSyncTime = $reuestData->lastSyncTime;
// $srno = $reuestData->srno;
// $start = $reuestData->start;
// $end = $reuestData->end;

$wordCls = new WordData($conn);
$wordCls->getWordsList($reuestData);

// $selection = "C_TIME > '$lastSyncTime'";
// if ($srno && $srno != 'undefined') {
// 	$selection = "srn > $srno";
// }

//  $sql= "SELECT * FROM $tableName WHERE $selection ORDER BY srn ASC LIMIT $start, $end";
 
//   $resultQuery = mysqli_query($conn, $sql) ;
//   $rows = array();

//  $returnResult->status = 0;
 
//  while ($row = mysqli_fetch_assoc($resultQuery)) {
//       $rows[] = $row;
//       $returnResult->lastSyncTime = $row['C_TIME'];
//   }
 
//   $returnResult->data = $rows;
//  echo json_encode($returnResult);

 class WordData {
	protected $conn;
	protected $data = array();
	function __construct($connString) {
		$this->conn = $connString;
	}
	
	public function getWordsList($params) {
		$this->data = $this->getRecords($params);
		
		echo json_encode($this->data);
    }

    function getRecords($params) {
        $rp = $params->rp;
		$sortname = $params->sortname;
		
        $query = strtolower($params->query);
        $qtype = $params->qtype;
		$page = $params->page;
		$sortorder = $params->sortorder;
		if ($sortorder) {
			$sortorder = 'ASC';
		}

		// $rp = isset($_POST['rp']) ? $_POST['rp'] : 10;
		// $sortname = isset($_POST['sortname']) ? $_POST['sortname'] : 'C_TIME';
		// $sortorder = isset($_POST['sortorder']) ? $_POST['sortorder'] : 'desc';
		// $query = isset($_POST['query']) ? $_POST['query'] : false;
		// $qtype = isset($_POST['qtype']) ? $_POST['qtype'] : false;
		
		//if (isset($_POST['page'])) { $page  = $_POST['page']; } else { $page=1; };  
        $start_from = ($page-1) * $rp;
		$searchCondition = $query ? "WHERE C_ENGLISH LIKE '%$query%'" : "";

		$sql = "SELECT * FROM EKA_WORD_TABLE $searchCondition order by ".$sortname." ".$sortorder." LIMIT ". $start_from .",".$rp;
		
		$sqlTot = "SELECT * FROM EKA_WORD_TABLE";
		$qtot = mysqli_query($this->conn, $sqlTot) or die("error to fetch tot EKA_WORD_TABLE data");
		$queryRecords = mysqli_query($this->conn, $sql) or die("error to fetch EKA_WORD_TABLE data");
		
		while( $row = mysqli_fetch_assoc($queryRecords) ) { 
			$data[] = $row;
			//echo "<pre>";print_R($data);die;
		}
		$json_data = array(
			"page"            => $page,   
			"total"    => intval($qtot->num_rows),
			"rows"            => $data ? $data : array() // total data array
		);
		
		return $json_data;
	}
}

?>