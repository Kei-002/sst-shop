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
        Schema::create('stocks', function (Blueprint $table) {
            $table->integer('item_id')->unsigned();
            $table->foreign('item_id')->references('id')->on('items')
                ->onDelete('cascade');
            $table->integer('quantity');
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stocks');
    }
};
