@extends('admin.layouts.app')

@section('content')
<div id="page_content_inner">
    <h2 class="heading_b uk-margin-bottom">Variant Detail</h2>
    <div class="md-card uk-margin-large-bottom">
        <div class="md-card-content">
            <form method="post" action="{{route('add_variant')}}" id="form_validation" enctype="multipart/form-data"
                class="uk-form-stacked task-form">
                @csrf
                <div id="keyCountDiv"></div>
                <div class="uk-width-medium-1-1 row">
                    <input type="hidden" name="product_id" value="{{decrypt(last(request()->segments()))}}">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="uk-width-medium-1-1">
                                <label for="fullname">Featured<span class="req">*</span></label>
                                <div class="parsley-row">
                                    <input type="checkbox" checked data-switchery data-switchery-color="#76C804;"
                                        name="feature" value="1" id="switch_demo" />
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="col-md-6">
                            <div class="uk-width-medium-1-1" style="float:right;">
                                <label for="fullname">Top Weekly<span class="req">*</span></label>
                                <div class="parsley-row">
                                    <input type="checkbox" name="weekly" checked data-switchery
                                        data-switchery-color="#76C804;" name="feature" value="1" id="switch_demo" />
                                </div>
                            </div>
                        </div>
                        <br>
                    </div>
                </div>
                <div></div><br>

                <div class="uk-grid" data-uk-grid-margin>
                <div class="uk-width-medium-1-1 row"><br>
                    <label for="fullname">Variant<span class="req">*</span></label><br>
                    <div class="parsley-row">
                        <div class="uk-width-medium-3-5">
                            <input type="radio" name="variant_status" id="radio_demo_inline_1123"
                                value="yes"   />
                            <label for="radio_demo_inline_1123" class="inline-label">Yes</label>
                            <input type="radio" name="variant_status" id="radio_demo_inline_2123"
                                value="no" checked  />
                            <label for="radio_demo_inline_2123" class="inline-label" >No</label>
                        </div>
                    </div>
                </div>
                </div>
                
                <div class="uk-grid variants-wrapper" data-uk-grid-margin style="display:none;">
                        <div class="uk-width-medium-1-1">
                            <div class="uk-form-row">
                                <div class="uk-grid" data-uk-grid-margin>
                                    <div class="uk-width-medium-1-2">
                                        <input type="number" id="variant_quantity" name="unit_quantity" autocomplete="off" placeholder="Enter Unit Quantity"
                                        class="md-input task mobile" />
                                    </div>
                                    <div class="uk-width-medium-1-2">
                                        <select name="unit" id="unit_size" class="md-input form-control">
                                        <option value="">Select Size</option>
                                        <option value="kg">Kg</option>
                                        <option value="g">Gram</option>
                                        <option value="ltr">liter</option>
                                        <option value="1 pack">Pack of 1</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><br>

            
                <div class="uk-width-medium-1-1" id="old_price">
                    <label for="fullname">MRP Price</label>
                    <div class="parsley-row">
                        <input type="text" name="price" autocomplete="off" placeholder="Enter MRP Price"
                            class="md-input task mobile" />
                    </div>
                </div><br>


                <div class="uk-width-medium-1-1" id="new_price">
                    <label for="fullname">Offer Price</label>
                    <div class="parsley-row">
                        <input type="text" name="discount_price" autocomplete="off" placeholder="Enter Offer Price"
                            class="md-input task mobile" />
                    </div>
                </div><br>

                <div class="uk-width-medium-1-1" id="quantity">
                    <label for="fullname">Quantity</label>
                    <div class="parsley-row">
                        <input type="text" name="quantity" autocomplete="off" placeholder="Enter quantity"
                            class="md-input task mobile" />
                    </div>
                </div><br>

                <div class="jtable-input-field-container">
                    <div class="jtable-input-label">Images</div>
                    <div class="jtable-input jtable-text-input">
                        <div class="md-input-wrapper md-input-filled">
                            <input accept="image/*" type="file" id="image"  name="image[]" class="dropify" />
                            <span class="md-input-bar"></span>
                        </div>
                    </div>
                </div>
                <br>
                <div class="uk-grid">
                    <div class="uk-width-forms_wysiwyg_ckeditor1-1">
                        <button type="submit" class="md-btn"
                            style="background-color:#e2932d;color: white;">Submit</button>
                        <a href="{{ URL::previous() }}" type="button"
                            class="md-btn md-btn-wave waves-effect waves-button">Cancel</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
@section('js')
    @include('admin.variant.productjs')
    <script>
        CKEDITOR.replace('rohi', {
            skin: 'moono',
            enterMode: CKEDITOR.ENTER_BR,
            shiftEnterMode:CKEDITOR.ENTER_P,
            toolbar: [{ name: 'basicstyles', groups: [ 'basicstyles' ], items: [ 'Bold', 'Italic', 'Underline', "-", 'TextColor', 'BGColor' ] },
             { name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
             { name: 'scripts', items: [ 'Subscript', 'Superscript' ] },
             { name: 'justify', groups: [ 'blocks', 'align' ], items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
             { name: 'paragraph', groups: [ 'list', 'indent' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'] },
             { name: 'links', items: [ 'Link', 'Unlink' ] },
             { name: 'insert', items: [ 'Image'] },
             { name: 'spell', items: [ 'jQuerySpellChecker' ] },
             { name: 'table', items: [ 'Table' ] }
             ],
        });
    </script>
    
@endsection
