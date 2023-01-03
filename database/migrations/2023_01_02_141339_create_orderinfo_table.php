<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orderinfo', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('customer_id')->unsigned();
            $table->foreign('customer_id')->references('id')->on('customers')
                ->onDelete('cascade');
            $table->timestamp('created_at')->useCurrent();
            $table->date('date_shipped');
            $table->integer('shipper_id')->unsigned();
            $table->foreign('shipper_id')->references('id')->on('shippers')
                ->onDelete('cascade');
            $table->text('status')->default('processing');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orderinfo');
    }
};
